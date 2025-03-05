// Lexical scope

function help(){
    let helpType = "study material for interview preparation."

    function helper(){

        console.log(helpType);
    }

    helper();
}

// help();


// closures

function increment(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    }
}

let counter = increment();

// counter();   // 1
// counter();   // 2
// counter();   // 3 

function accountBalance(initialinzing) {
    let balance = initialinzing;

    return{

        credit: function(amount){

            balance += amount;

            console.log(`have credited ${amount} and current balance is ${balance}`);
        } ,
        withdraw: function(amount){

            if(balance >= amount) {
                balance -= amount;

                console.log( `have debited ${amount} and current balance is ${balance}`)
            }else{
                console.log("insufficient balance")
            }
        },

        getBalance: function(){
            console.log(`current balance is ${balance}`)
        }

    }
} 

let accountUser = accountBalance(1000);

accountUser.credit(500);
accountUser.withdraw(100);
accountUser.getBalance();