const express = require('express');
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//assign routes to server
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//listener
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});