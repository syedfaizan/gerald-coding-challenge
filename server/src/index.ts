import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { init } from './controller/database';

const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json()); // to Parse POST body to JSON


app.use(async (req, res, next) => {
    const db = await init();
    req.db = db;
    next();
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

