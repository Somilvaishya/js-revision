let score = "33hh3"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

// "33" => 33
// "33ddd" => NaN
// true => 1; false => 0


let isLoggedIns = 1;
let isLoggedInss = "";
let isLoggedIn = "ram";

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true
// "" => false
// "ram"=> true

let num = 78;
let str = String(num);
// console.log(typeof str);


///////////////////operation//////////////////

let value = 4;
let negVal = -value;
// console.log(negVal);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " somil";
let str3 = str1 + str2;
// console.log(str3);
// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 +"2"); // 32



// postfix and prefix increment

let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"





let str4 = "1,2,3";
let arr2 = str4.split(","); 

let arr = [1, 2, 3];
let strArr = arr.toString(); // "1,2,3"
let strArr2 = arr.join("-"); // "1-2-3"

// console.table([arr2, strArr, strArr2 ]);


let jsonString = '{"name":"Alice","age":25}';
let obj2 = JSON.parse(jsonString); // { name: "Alice", age: 25 }


console.log(obj2);





