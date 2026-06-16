import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import type { Request, Response, NextFunction } from 'express';
import { connectDB, getDBStatus } from './config/db.ts';
import messageRoutes from './routes/messageRoutes.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((origin) => origin.trim()).filter(Boolean)
  : [];

app.use(cors({
  origin: allowedOrigins.length > 0 ? allowedOrigins : true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createRateLimiter = (windowMs: number, max: number) => {
  const hits = new Map<string, { count: number; resetAt: number }>();

  return (req: Request, res: Response, next: NextFunction): void => {
    const now = Date.now();
    const key = req.ip || req.socket.remoteAddress || 'unknown';
    const current = hits.get(key);

    if (!current || current.resetAt <= now) {
      hits.set(key, { count: 1, resetAt: now + windowMs });
      next();
      return;
    }

    if (current.count >= max) {
      res.status(429).json({
        success: false,
        message: '请求过于频繁，请稍后再试'
      });
      return;
    }

    current.count += 1;
    next();
  };
};

const apiLimiter = createRateLimiter(15 * 60 * 1000, 20);

app.use('/api/messages', apiLimiter, messageRoutes);

app.get('/api/health', (req, res) => {
  const database = getDBStatus();

  res.status(database.state === 'connected' ? 200 : 503).json({
    success: database.state === 'connected',
    service: 'my-college-life-api',
    database,
    timestamp: new Date().toISOString()
  });
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
