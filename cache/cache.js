

function cache(fn){
  const mp = new Map();
    return function (...args){
           const key = JSON.stringify(args);
           if(mp.has(key)){
            console.log("from cache");
            return mp.get(key)
           }

           const result = fn(...args);
           mp.set(key,result);
           return result;
    }
}


function add(a,b){
  return a+b;
}

const memoized = cache(add);
const res1 = memoized(2,3);
const res2 = memoized(2,3);
console.log(res2);