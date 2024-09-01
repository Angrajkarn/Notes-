"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noteController_1 = require("../controllers/noteController");
const router = (0, express_1.Router)();
router.post('/note', noteController_1.createNote);
router.get('/notes', noteController_1.listNotes);
router.delete('/note/:id', noteController_1.removeNote);
exports.default = router;
