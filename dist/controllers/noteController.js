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
exports.removeNote = exports.listNotes = exports.createNote = void 0;
const noteService_1 = require("../services/noteService");
const createNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const noteId = yield (0, noteService_1.saveNote)(req.body);
        res.status(201).json({ id: noteId });
    }
    catch (error) {
        next(error);
    }
});
exports.createNote = createNote;
const listNotes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield (0, noteService_1.getNotes)();
        res.status(200).json(notes);
    }
    catch (error) {
        next(error);
    }
});
exports.listNotes = listNotes;
const removeNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, noteService_1.deleteNote)(Number(req.params.id));
        res.sendStatus(204);
    }
    catch (error) {
        next(error);
    }
});
exports.removeNote = removeNote;
