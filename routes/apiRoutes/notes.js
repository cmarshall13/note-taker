const router = require('express').Router();
const path = require('path');
const notesData = require('../../db/db.json');
const notesFunctions = require('../../lib/notes');