import express from 'express';
import { test, redirect } from './controllers';
import { config } from 'dotenv';
import { connectDb } from './utils';
config();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

export const client = connectDb(CONNECTION_STRING);

const app = express();

app.use(express.static('dist'));

app.use(express.json());

app.get('/test', test);

app.get('/*', redirect);
app.listen(SERVER_PORT, () => console.log(`For the Horde! [${SERVER_PORT}]`));
