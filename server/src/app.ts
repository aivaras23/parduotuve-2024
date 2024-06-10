import express, {Application, Request, Response} from 'express';
import { skaiciuokleRouter } from './routes/skaiciuokle.router';
import bodyParser from 'body-parser';
import { corsHeaders } from './middlewares/cors.middleware';
import { productsRouter } from './routes/products.router';

const app:Application=express();

//Sutvarkomi duomenys jei buvo siusta forma
app.use(express.urlencoded());

//Sutvarkomi duomenys jei buvo atsiustas JSON failas
app.use(express.json());

//i visus response headerius ikeliame CORS nurodymus
app.use(corsHeaders);

//Uzkrauname route faila (kur nurodyti skaiciuokles url)
app.use('/skaiciuokle', skaiciuokleRouter);


export {app};