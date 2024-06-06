import express, {Application, Request, Response} from 'express';
import { skaiciuokleRouter } from './routes/skaiciuokle.router';
import bodyParser from 'body-parser';

const app:Application=express();

//Sutvarkomi duomenys jei buvo siusta forma
app.use(express.urlencoded());

//Sutvarkomi duomenys jei buvo atsiustas JSON failas
app.use(express.json());

app.use((req:Request,res:Response, next)=>{
    console.log("CORS");

    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Request-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use('/skaiciuokle', skaiciuokleRouter);


export {app};