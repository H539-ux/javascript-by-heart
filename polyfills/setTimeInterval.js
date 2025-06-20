


let timer_id = 1000;
const timers ={};
function mySetInterval(callback,delay,...args){
   const sep_id = timer_id++;


    timers[sep_id]={
      callback,
      start:delay+Date.now(),
      args:[...args],
      delay
    }
   if(Object.keys(timers).length === 1){
             requestIdleCallback(processTimers);
   }
 

    return sep_id;
}
function processTimers() {
  const now = Date.now();

  Object.keys(timers).forEach((key) => {
    const { callback, start, args, delay } = timers[key];

    if (now >= start) {
      callback(...args);
      timers[key].start += delay;
    }
  });

  if (Object.keys(timers).length > 0) {
    requestIdleCallback(processTimers);
  }
}

function clearTimeInterval(id){
       if(timers[id]){
        delete timers[id];
       }
}




const timerId = mySetInterval(fun,1000,"harshal");
const timerId1 = mySetInterval(fun,2000,"harshal1");
const timerId2 = mySetInterval(fun,3000,"harshal2");