// added resolve and reject both and support simple then catch we can't return a one promise to other here i mean one then cannot return to other then a new promise

class Mypromisev2{

  constructor(executor){
    this.state = "pending",
    this.successValue = undefined;
    this.rejectValue = undefined;
    this.successCallbacks = [];
    this.failCallbacks = [];
    const resolve=(value)=>{
      if(this.state == "pending"){
        this.state = "success";
         this.successValue = value;
         if(this.successCallbacks.length>0){
          this.successCallbacks.forEach((scb)=>queueMicrotask(()=>{scb(this.successValue)}));
         }
      }

    }
   const  reject=(value)=>{
      if(this.state == "pending"){
        this.state = "failure";
        this.rejectValue = value;
        if(this.failCallbacks.length>0){
          this.failCallbacks.forEach((rcb)=>queueMicrotask(()=>{rcb(this.rejectValue)}));
        }
      }

    }
   try{
        executor(resolve,reject);
   }catch(e){
         reject(e);
   }
   
  }

  then(successCallback){
        if(this.state == "success"){
          queueMicrotask(()=>{successCallback(this.successValue)});
        }else {
          this.successCallbacks.push(successCallback);
        }

        return this;
  }
  catch(rejectCallback){
    if(this.state == "failure"){
         queueMicrotask(()=>{rejectCallback(this.rejectValue);})
    }else{
       this.failCallbacks.push(rejectCallback);
    }

    return this;
  }

}

const p = new Mypromisev2((resolve,reject)=>{
         let ans = 5
        setTimeout(()=>{
               if(ans==5){
                    resolve("success");
               }else{
                  reject("fail");
               }
        },1000)
})

p.then(
  (succvalue)=>console.log(succvalue),
).catch((err)=>{
  console.log(err);
})


