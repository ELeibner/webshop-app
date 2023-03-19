import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import errorHandler from './handlers/errors';
import product from './routes/product';

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
        methods: 'GET, POST'
    })
);
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200);
});

app.use(product);

app.use(errorHandler);

export default app;
