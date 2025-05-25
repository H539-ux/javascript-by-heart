

function outer(fun){
  let ran=false
   return function(...args){
       if(!ran){
          fun.apply(this,args);
          ran=true
       }
   }
}


function fun (name){
  console.log("hello",name);
}

let once = outer(fun);

once("harshal");


