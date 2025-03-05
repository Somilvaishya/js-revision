// function getData(){

//     return new Promise((res, rej)=>{

//         setTimeout(()=>{
//         let data = true;

//         if(data){
//             res("data get successfully");
//         } else {
//             rej("got some error")
//         }

//     } , 2000)
//     })
// }

// getData()
//      .then(res =>{
//     console.log(res)
// })
// .catch(rej=>{
//     console.log(rej)
// })


function apiGet(){
    return new Promise((res, rej)=>{

        setTimeout(()=>{
            let apidata = false;
            if(apidata){
                res("get api data")
            }else{
                rej("api data error")
            }
        },2000)
    })
}

apiGet()
      .then(res=>{
        console.log(res);
      })
      .catch(rej=>{
        console.log(rej)
      })