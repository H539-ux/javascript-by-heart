

const pipe = (...fn)=>(x)=>{

  const result =fn.reduce((val,func)=>func(val),x);
  return result;
  
}

const compose = (...fn)=>(x)=>{
  const result = fn.reduceRight((val,func)=>func(val),x);
  return result;
}

const add = (x)=> x+1;

const multiply = (x)=>x*2;

const subtract = (x)=>x-1;

const result1 = pipe(add,multiply,subtract)(3);
console.log("pipe result ",result1);
const result2 = compose(add,multiply,subtract)(3);
console.log("compose result ",result2);

