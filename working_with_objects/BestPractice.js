const person = { name: "Alice", age: 25, job: "Developer" };

// ⚠️ Pitfalls
// Includes inherited enumerable properties (unless filtered with hasOwnProperty).

// Order not guaranteed (though modern engines usually respect insertion order).

for(const key in person){
   if(person.hasOwnProperty(key)){ // to avoid key which is inherited 
       console.log(`${key} -> ${person[key]}`)  
   }

}


// 2] best way 

Object.entries(person).forEach(([key,value])=>{
  console.log(`${key}->${value}`)
})



