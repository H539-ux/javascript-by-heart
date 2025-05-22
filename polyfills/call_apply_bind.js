
/* doubt 

  we could have done data.tempFunc = data
  data.tempFunc()

  Problems:

Permanently modifies person by adding fun property

Doesn't clean up after itself (leaves fun on the object)

Hard to use for one-time calls (you'd need to manually add/remove)

Doesn't handle arguments elegantly


why this inbuild functions are better 

Solves all the problems:

Temporary attachment: Adds and removes the function automatically

Argument handling: Properly passes all arguments (...args)

Return value: Captures and returns the function result

No pollution: Leaves the object unchanged afterward
*/










// 1] call


//actual call

function data(greeting){
   return `${greeting} from ${this.name}`;
}
const person={
  name:"harsh",
  age:23
}

data.call(person)

// basic polyfill 

Function.prototype.myCall = function(obj ,...args){
      obj.tempFunc = this;
      const result = obj.tempFunc(...args);
      delete obj.tempFunc;

      return result;
}

const result = data.myCall(person,"hare krishna");



//polyfill with some constraints 

Function.prototype.myCallBetter = function (obj,...args){
   obj = obj || window // if no object provided we refer to global obj which is window
   const uniq = Symbol(); // to avoid key conflicts  like it could possible we already have tempFunc in obj 
   obj[uniq] = this ;
   const result = obj[uniq](...args);

   delete obj[uniq];

   return result;
}

const result2 = data.myCallBetter(person,"hello") ;
console.log(result2);





//2] Apply  


function app(city,state){
   return `my name is ${this.name} im from ${city} which is in ${state}`
}


const applyResult = app.apply(person,["sambhajinagar","Maharashtra"]);



//polyfill 

Function.prototype.myApply = function(obj,argsArray){
  obj = obj||window;
  const uniq = Symbol();
  obj[uniq] = this ;
  const result = obj[uniq](...argsArray);
  delete obj[uniq];
  return result;
}

const myApplyResult = app.myApply(person,["sambhajinagar","Maharashtra"]);



//3]Bind  

function bin(city, state) {
  console.log(`${this.name} from bind, living in ${city}, ${state}`);
}

const bindFunc = bin.bind(person,"sambhajinagar");

bindFunc("Maharashtra");

Function.prototype.myBind = function(obj,...args){
  obj=obj||window;
  const uniq = Symbol();
   obj[uniq] = this 
  return function(...bindargs){
     const result = obj[uniq](...bindargs,...args);
     delete obj[uniq];
     return result;
  }
}

const myBindFunc = bin.myBind(person,"sambhajinagar");
myBindFunc("Maharashtra")