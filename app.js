require('dotenv').config();
const products = require('./routes/products');
// async errors


const express = require('express');
const app = express();

const notFountMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');


// middleware

app.use(express.json());
app.use('/api/v1/products', products);

// routes

app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
})


const port = process.env.PORT || 3000;

app.use(notFountMiddleware);
app.use(errorMiddleware);

const start = async () => {
    try {
        // connectDB
        app.listen(port, console.log(`Server is listening on port http://localhost:${port}`));
    } catch (err) {
        console.log(error);
    }
}


start();