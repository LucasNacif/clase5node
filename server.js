const express = require('express');
const path  = require('path');
const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (request,response)=>{
    //response.send("Hello express ..! : ) ");
    response.sendFile(path.join(__dirname, "./static/menu.html"));
});

app.listen(puerto,()=>{
  console.log("El servidor está escuchando en el puerto " + puerto);
});

app.get("/addContact", (request,response)=>{
  response.sendFile(path.join(__dirname, "./form/addContact.html"));
});

app.post("/home",(request,response)=>{
  console.log("llego el formulario");
  response.send(request.body);
});