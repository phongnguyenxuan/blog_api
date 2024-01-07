const express = require('express');
const db = require('./src/config/index.js');
const apiRoute = require('./src/routes/router.js');
const cors = require('cors');
const PORT = 3000;

//connect to database
db.connect().then(() => {
    const app = express();

    app.use(cors());

    app.use(express.urlencoded({ extended: true }));

    app.use(express.json());

    app.use('/', apiRoute);

    app.listen(PORT, () => {
        console.log(`App listening on http://localhost:${PORT}`);
    });
});