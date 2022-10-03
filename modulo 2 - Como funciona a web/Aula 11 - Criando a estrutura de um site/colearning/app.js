const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => res.send('<h1 style="color: red;"> Agora foi! </h1>'));
app.get('/index', (req, res) => res.sendFile(path.resolve('./index.html/')));

app.listen(3000);