"use strict";
const db = require('mariadb');
const pool = db.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'notes_db'
});
