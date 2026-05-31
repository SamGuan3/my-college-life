import Message from '../models/Message.ts';
import { body, validationResult } from 'express-validator';

export const validateMessage = [
  body('name')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('姓名长度必须在1-50个字符之间'),
  body('email')
    .isEmail()
    .withMessage('请提供有效的邮箱地址'),
  body('subject')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('主题长度必须在1-100个字符之间'),
  body('message')
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage('留言内容长度必须在1-500个字符之间')
];

export const createMessage = async (req: any, res: any): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: '输入验证失败',
        errors: errors.array()
      });
      return;
    }

    const { name, email, subject, message } = req.body;
    
    const newMessage = new Message({ name, email, subject, message });
    const savedMessage = await newMessage.save();
    
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

export const getMessages = async (req: any, res: any): Promise<void> => {
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

export const getMessageById = async (req: any, res: any): Promise<void> => {
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

export const deleteMessage = async (req: any, res: any): Promise<void> => {
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