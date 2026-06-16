import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

const MessageSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, '请输入您的姓名'],
    trim: true,
    maxlength: [50, '姓名不能超过50个字符']
  },
  email: {
    type: String,
    required: [true, '请输入您的邮箱'],
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, '请输入有效的邮箱地址']
  },
  subject: {
    type: String,
    required: [true, '请输入留言主题'],
    trim: true,
    maxlength: [100, '主题不能超过100个字符']
  },
  message: {
    type: String,
    required: [true, '请输入留言内容'],
    trim: true,
    maxlength: [500, '留言内容不能超过500个字符']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IMessage>('Message', MessageSchema);
