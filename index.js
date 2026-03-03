const express = require('express');
const app = express();
const port = 3000;

//Serve static files from the "public" folder
app.use(express.static('public'));
app.use(express.json()); //Middleware to parse JSON bodies

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

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
})

const items = ['Apple', 'Banana', 'Orange'];

//Route to get items
app.get('/items', (req, res) => {
    res.json(items);
})

//Route to add an item
app.post('/items', (req, res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
})

app.delete('/items/:index', (req, res) => {
    const index = parseInt(req.params.index);
    items.splice(index,1);
    res.json(items);
})

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
