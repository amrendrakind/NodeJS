const person = {
    name : "Amrendra K",
    age : 35,
    greet : function (){
        console.log("Hii, I am ", this.name)
    }
}
person.greet()

const hobbies = ["Sports", "Cooking"]

console.log(hobbies.map(hobby => "Hobby: "+hobby))
console.log(hobbies)


const printNumbersOnInterval = (n) => {
    for (let i = 1; i <= n; i++) {
      setTimeout(() => {
        console.log(i)
      }, i*1000)
    }
  }
  printNumbersOnInterval(10);
