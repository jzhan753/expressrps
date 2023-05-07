// server-express.js
const express = require('express')
const app = express() // initialize app
const port = 3000

// GET callback function returns a response message
app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node.js\n')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

let counter = 0;


app.get('/visits', (req, res) => {
    counter += 1
    // Text formatting from ‘text formatting’ JavaScript prelab section
    res.send(`There have been ${counter} visits to this session\n`);
});

let wins = 0;
let games = 0;

function rps(req, res) {
    const rndInt = Math.random();
    console.log(rndInt);
    games++;
    // It doesn't actually matter which one they picked, we just give them a 1/3 chance of winning.
    if (rndInt <= 0.33) {
        wins++;
        res.send(`You won! You have won ${wins} times in ${games} games.\n`);
    } else {
        res.send(`You did not win. You have won ${wins} times in ${games} games.\n`);
    }
}

app.get('/rock', rps);
app.get('/paper', rps);
app.get('/scissors', rps);