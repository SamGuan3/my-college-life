import { Request, Response, NextFunction } from 'express';

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({
      success: false,
      message: '未提供管理员认证令牌'
    });
    return;
  }
  
  const token = authHeader.split(' ')[1];
  const adminSecret = process.env.ADMIN_SECRET_KEY;
  
  if (!adminSecret || token !== adminSecret) {
    res.status(403).json({
      success: false,
      message: '无效的管理员认证令牌'
    });
    return;
  }
  
  next();
};
