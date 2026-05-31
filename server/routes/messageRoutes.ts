import express from 'express';
import { createMessage, getMessages, getMessageById, deleteMessage, validateMessage } from '../controllers/messageController.ts';
import { adminAuth } from '../middleware/auth.ts';

const router = express.Router();

router.post('/', validateMessage, createMessage);
router.get('/', getMessages);
router.get('/:id', getMessageById);
router.delete('/:id', adminAuth, deleteMessage);

export default router;