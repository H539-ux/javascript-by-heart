

// simple promise  with only resolve case 

class Mypromise {
  constructor(executor){
    this.successValue = undefined;
    this.callbacks = [];
    const resolve = (value)=>{
       this.successValue = value;
       if(this.callbacks.length>0){
        console.log("executing thens when resolve is called  ")
        this.callbacks.forEach((cb)=>cb(this.successValue));
       }
    }

    executor(resolve);
  }

   then = (fullfilled)=>{
     if(this.successValue){
      console.log("executed thens callback after  resolve completed and we have successValue")
      fullfilled(this.successValue)
     }else{
      this.callbacks.push(fullfilled);
     }
   }

}


const p = new Mypromise((resolve)=>{
  console.log("executor function");

  setTimeout(()=>{resolve("hello")},1000);
})

setTimeout(()=>{
   p.then((value)=>{
  console.log("1st",value);
})
},2000)


p.then((value)=>{
  console.log("2nd",value)
})
