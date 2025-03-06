function greet(name){
    return `hello ${name}`;
}

function processName(name, callback){

    return callback(name);
}

console.log(processName("harsh", greet))