const Clases = require("./clases.js");

console.log("---TEST CONTACT---");
var miContacto = new Clases.Contact("Lucas","lucas.nacif@hotmail.com",2613628979,true);
console.log(miContacto);

console.log("---Mi otro contacto---");

var miOtroContacto = new Clases.Contact;

miOtroContacto.setName("Mirco");
miOtroContacto.setEmail("mirco@gmail.com");
miOtroContacto.setMobil(1213245);
miOtroContacto.setTopList(false);

console.log(miOtroContacto);

console.log(miOtroContacto.getName());
console.log(miOtroContacto.getEmail());
console.log(miOtroContacto.getMobil());
console.log(miOtroContacto.getTopList());


var miContactBook = new Clases.contactBook("amigos de futbol",[]);

miContactBook.addContact(miContacto);
console.log(miContactBook);