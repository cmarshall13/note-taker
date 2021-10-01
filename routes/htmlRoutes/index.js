const path = require('path');
const router = require('express').Router();

//display contents of index.html at server root
router.get('/', (req,res) => {
    try {
        res.sendFile(path.join(__dirname, '../../public/index.html'));
    }
    catch (err) {
        res.status(500).statusMessage('Something went wrong!');
    }
});

//display the notes page
router.get('/notes', (req,res) => {
    try {
        res.sendFile(path.join(__dirname, '../../public/notes.html'));
    }
    catch (err) {
        res.status(500).statusMessage('Something went wrong!');
    }
});