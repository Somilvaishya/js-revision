// Protypeinheritence

// function developer(){
//     this.canCode = true;
//     this.canMakeWeb = true;
// }

// developer.prototype.man = function (){
//         console.log(`developer can code ${this.canCode} and can make web ${ this.canMakeWeb}`)
// }

let human = {
    canTalk : true,
    canFly : false,
    canWalk :true
}

let developer = {
    canCode : true,
    CanDevWeb : true
}

developer._proto_=human;

console.log(developer)
