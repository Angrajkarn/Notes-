import { getConnection } from '../database/mariadb';
import { Note } from '../models/Note';

export const saveNote = async (note: Note): Promise<number> => {
    const conn = await getConnection();
    try {
        const result = await conn.query('INSERT INTO notes (content) VALUES (?)', [note.content]);
        return result.insertId;
    } finally {
        conn.release();
    }
};

export const getNotes = async (): Promise<Note[]> => {
    const conn = await getConnection();
    try {
        const rows = await conn.query('SELECT * FROM notes');
        return rows;
    } finally {
        conn.release();
    }
};

export const deleteNote = async (id: number): Promise<void> => {
    const conn = await getConnection();
    try {
        await conn.query('DELETE FROM notes WHERE id = ?', [id]);
    } finally {
        conn.release();
    }
};
