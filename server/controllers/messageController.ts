import type { Request, Response, NextFunction } from 'express';
import Message from '../models/Message.ts';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cleanText = (value: unknown) => String(value ?? '').trim();

export const validateMessage = (req: Request, res: Response, next: NextFunction): void => {
  const name = cleanText(req.body.name);
  const email = cleanText(req.body.email).toLowerCase();
  const subject = cleanText(req.body.subject);
  const message = cleanText(req.body.message);
  const website = cleanText(req.body.website);

  if (website) {
    res.status(400).json({ success: false, message: '提交失败，请稍后重试' });
    return;
  }

  if (name.length < 1 || name.length > 50) {
    res.status(400).json({ success: false, message: '姓名长度必须在1-50个字符之间' });
    return;
  }

  if (!emailPattern.test(email)) {
    res.status(400).json({ success: false, message: '请提供有效的邮箱地址' });
    return;
  }

  if (subject.length < 1 || subject.length > 100) {
    res.status(400).json({ success: false, message: '主题长度必须在1-100个字符之间' });
    return;
  }

  if (message.length < 1 || message.length > 500) {
    res.status(400).json({ success: false, message: '留言内容长度必须在1-500个字符之间' });
    return;
  }

  req.body = { name, email, subject, message };
  next();
};

export const createMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, subject, message } = req.body;
    const savedMessage = await Message.create({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: '留言已成功提交',
      data: savedMessage
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || '提交留言失败'
    });
  }
};

export const getMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const messages = await Message.find()
      .sort({ createdAt: -1 })
      .limit(50);

    res.status(200).json({
      success: true,
      data: messages
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || '获取留言列表失败'
    });
  }
};

export const getMessageById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const message = await Message.findById(id);

    if (!message) {
      res.status(404).json({
        success: false,
        message: '留言不存在'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: message
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || '获取留言失败'
    });
  }
};

export const deleteMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedMessage = await Message.findByIdAndDelete(id);

    if (!deletedMessage) {
      res.status(404).json({
        success: false,
        message: '留言不存在'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: '留言已删除',
      data: deletedMessage
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || '删除留言失败'
    });
  }
};
