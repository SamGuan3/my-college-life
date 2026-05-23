import Message from '../models/Message.ts';

export const createMessage = async (req: any, res: any): Promise<void> => {
  try {
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