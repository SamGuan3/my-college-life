import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/my-college-life');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export const getDBStatus = () => {
  const states: Record<number, string> = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };
  const readyState = mongoose.connection.readyState;

  return {
    state: states[readyState] || 'unknown',
    host: mongoose.connection.host || null,
    database: mongoose.connection.name || null
  };
};
