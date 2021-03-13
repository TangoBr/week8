function promise1(){
    return new Promise((resolve,reject)=> {
        resolve();
    });
}
.then(()=>(console.log(`success`))
.catch(() =>(console.log(`there was an error`)))