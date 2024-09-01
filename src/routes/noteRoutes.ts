import { Router } from 'express';
import { createNote, listNotes, removeNote } from '../controllers/noteController';

const router = Router();

router.post('/note', createNote);
router.get('/notes', listNotes);
router.delete('/note/:id', removeNote);

export default router;
