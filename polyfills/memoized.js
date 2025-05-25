function add(obj){
  console.log("calling add")
  return obj.a+obj.b;
}




 function memoize(fun){
   const cache ={};

   return function(...args){
     const key = JSON.stringify(args);

    if(key in cache){
      console.log("returning memoized data");
      return cache[key];
    }
    const result = fun.apply(this,args);
    cache[key] = result;
    return result;
   }
 }



const obj = {
  a:1,
  b:2
}

const memoized = memoize(add);


const res1 = memoized(obj);
const res2 = memoized(obj);
console.log(res2)

