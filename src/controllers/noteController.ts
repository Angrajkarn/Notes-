import { Request, Response, NextFunction } from 'express';
import { saveNote, getNotes, deleteNote } from '../services/noteService';

export const createNote = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const noteId = await saveNote(req.body);
        res.status(201).json({ id: noteId });
    } catch (error) {
        next(error);
    }
};

export const listNotes = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const notes = await getNotes();
        res.status(200).json(notes);
    } catch (error) {
        next(error);
    }
};

export const removeNote = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await deleteNote(Number(req.params.id));
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};
