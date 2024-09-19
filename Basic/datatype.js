// Primitive and Non-primitive

// **Primitive datatype**
// Number
// String
// Boolean
// undefine
// Null


// let a = 5;
// let b = "9";
// let c= true;
// let d;
// let e = null;

// console.table([a,b,c,d,e]);
// console.log(typeof(a,b,c,d,e))


//** Non-primitive
// Array
// Object
// Funtion

// let newArray = ["Ram", "Shyam", "Bhagwan"];
// // console.log(newArray[1])
// // console.log(newArray.length)
// console.log(newArray[2].length)

// let newObject = {
//     name: "somil",
//     designation: "developer",
//     Location: "gurugram"
// }
// console.log(newObject)
// console.log(typeof(newObject))
// console.log(newObject.name)

function user(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
}
const userOne = new user("Somil", "somil@gmail.com", "1234")

console.log(userOne)




