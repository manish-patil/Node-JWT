const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
// app.use(cors());

const PORT = process.env.PORT || 8083;

if (process.env.NODE_ENV !== 'dev') {
    app.use('/', express.static(path.join(__dirname, '/dist/Node-JWT')));
}

app.get('/api/', (req, res) => {
    res.send('API works');
});

if (process.env.NODE_ENV !== 'dev') {
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, "/dist/Node-JWT/index.html"));
    });
}

app.listen(PORT, () =>
    console.log(`Server runing on port ${PORT}`)
);