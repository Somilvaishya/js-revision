function getData(){
    return new Promise((res)=>{

        setTimeout(()=>{
        res("get data successfully!")
    }, 2000)
})

}

async function response(){
    console.log("Fetching...");
    let data = await getData();
    console.log(data);
}

response();