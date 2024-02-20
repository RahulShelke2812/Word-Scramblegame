function delay() {
    return new Promise((resolve,reject)=>{
       reject("Responce Data")
    })
}
delay().then((res)=>{
console.log(res);
}).catch((err)=>{
console.log("efrror ===>" , err);
})