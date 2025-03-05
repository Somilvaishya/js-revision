function whatsHappen(callback){

    setTimeout(()=>{
        console.log("nothing just we are getting some error")
        callback();

    },2000

)  
}

function response(){
    console.log("ohh, ok if you need any help let me know")
}

whatsHappen(response);
