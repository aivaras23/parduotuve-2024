import { app } from "./app.js";


console.log("Aplikacija paleista");

app.listen(3999, ()=>{
    console.log("Express serveris paleistas, ant uosto 3999");
})