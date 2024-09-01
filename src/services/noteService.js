"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.getNotes = exports.saveNote = void 0;
const mariadb_1 = require("../database/mariadb");
const saveNote = (note) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield (0, mariadb_1.getConnection)();
    try {
        const result = yield conn.query('INSERT INTO notes (content) VALUES (?)', [note.content]);
        return result.insertId;
    }
    finally {
        conn.release();
    }
});
exports.saveNote = saveNote;
const getNotes = () => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield (0, mariadb_1.getConnection)();
    try {
        const rows = yield conn.query('SELECT * FROM notes');
        return rows;
    }
    finally {
        conn.release();
    }
});
exports.getNotes = getNotes;
const deleteNote = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = yield (0, mariadb_1.getConnection)();
    try {
        yield conn.query('DELETE FROM notes WHERE id = ?', [id]);
    }
    finally {
        conn.release();
    }
});
exports.deleteNote = deleteNote;
