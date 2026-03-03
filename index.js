const express = require('express');
const app = express();
const port = 3000;

//Serve static files from the "public" folder
app.use(express.static('public'));

//Route for home page
app.get('/', (req, res) => {
    res.send("Hello World!");
})

//Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})

app.get('/about', (req, res) => {
    res.send("About Us");
})

app.use(express.json()); //Middleware to parse JSON bodies

//Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

//Middleware to handle errors
app.use((err,req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
})