const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

let receivedAnswers = [];

app.post('/save-answers', (req, res) => {
    const { answers } = req.body;
    receivedAnswers = answers;
    console.log('Received answers:', receivedAnswers);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
