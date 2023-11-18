
//se importa el módulo fs (File System) de Node.js, que proporciona funciones para interactuar con el sistema de archivos.
//var fs = require("fs");
/*
//-------LEER ARCHIVO DE FORMA SINCORNICA-------------

// se lee de manera sincrónica (bloqueante) el contenido texto.txt en formato UTF-8, y se almacena en la variable contenido
var contenido = fs.readFileSync("./archivos/texto.txt","utf-8");

//se imprime el contenido
console.log(contenido);
*/
//----------------LEER ARCHIVO DE FORMA ASINCORNICA-----------------
/*
//se lee de manera asincrónica (no bloqueante) el contenido del texto.txt. 
//Se proporciona una función de devolución de llamada (callback) que se ejecutará una vez que se complete la lectura. 
//En caso de éxito, la función imprime el contenido del archivo en la consola
var contenido = fs.readFile("./archivos/texto.txt","utf-8",(error,data)=>{
    console.log(data);
});

//Aquí se imprime el contenido antes de que se complete la lectura asincrónica. ya que no bloquea la ejecución del programa, por lo que este console.log se ejecutará antes de que se complete la lectura asincrónica.
console.log(contenido);

*/
/*
//----------------ESCRIBIR ARCHIVO -------------------------

//contenido de la variable texto
var texto = "hola como estas"

fs.appendFile("./archivos/texto.txt","\n"+texto,(error)=>{
    if(error){
        console.log("no anduvo");
    }else{
        console.log("bien master se escribio");
        
    }
} )
*/

/*
LEER EL ARCHIVO datos.json 
var alumno = require("./archivos/datos.json");
console.log(alumno);
*/
/*
OTRA FORMA DE LEER datos.json

var fs = require("fs");
fs.readFile("./archivos/datos.json", (error,datos)=>{
    if(error){
        console.log("no anduvo");
    }else{
        console.log("datos parseados a json:");
        var json_datos = JSON.parse(datos);
        console.log(json_datos);
        console.log("datos individualmente");
        console.log("\n"+"Nombre: " + json_datos.alumno + "\n"+
                         "Dni: " + json_datos.dni + "\n"+
                         "Edad: " + json_datos.edad + "\n"+
                         "Deudor? " + json_datos.libredeuda + "\n"
        )
    }
}
)
*/
