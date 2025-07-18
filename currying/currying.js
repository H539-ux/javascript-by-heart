


//simple curry
function curry1(a){
     return function(b){
       return a+b;
     }
}

// variadic currying 
function curry2(a){
   return function(...args){
    const sum = args.reduce((cumm,nums)=>cumm+nums , a);
    return sum;
   }
}

function curry3(...outargs){
   const outsum = outargs.reduce((cumm,curr)=>cumm+curr,0);
   return function(...inargs){
       const total = inargs.reduce((cumm,curr)=>cumm+curr,outsum);
       return total;
   }
}

// infinite curryying 

function inficurry(a){
  return function(...args){
    if(args.length === 0) return a;
    const total = args.reduce((cumm,curr)=>curr+cumm,a);
    return inficurry(total);
  }
}

console.log(curry1(2)(3));

console.log(curry2(1)(2,3,4));

console.log(curry3(1,2)(3,4,5));

console.log(inficurry(1)(2)(3)(5)());



// realtime use case Useful when you want to reuse a function with fixed config options:
function fetchWithBase(baseURL) {
  return function (endpoint) {
    return fetch(`${baseURL}${endpoint}`);
  };
}

const api = fetchWithBase("https://api.example.com/");
api("users");    // fetch("https://api.example.com/users")
api("posts");    // fetch("https://api.example.com/posts")
