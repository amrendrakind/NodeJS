const person = {
    name : "Amrendra K",
    age : 35,
    greet : function (){
        console.log("Hii, I am ", this.name)
    }
}

person.greet()