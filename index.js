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

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
})