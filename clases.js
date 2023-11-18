class Contact {
    constructor(name, email, mobil, toplist = false) {
        this.name = name;
        this.email = email;
        this.mobil = mobil;
        this.toplist = toplist;
    }

    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    setMobil(mobil) {
        this.mobil = mobil;
    }
    getMobil() {
        return this.mobil;
    }
    setTopList(toplist) {
        this.toplist = toplist;
    }
    getTopList() {
        return this.toplist;
    }
}

class contactBook{
    constructor(nombre,contacts=[]){
        this.nombre=nombre;
        this.contacts=contacts;
    }
    
    addContact(cont){
        this.contacts.push(cont);
    }
}


module.exports = {Contact,contactBook}