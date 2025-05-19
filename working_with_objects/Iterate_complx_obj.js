// ✅ Check if a key exists in an object
const obj = { a: 1, b: 2 };

console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('c')); // false


// ✅ Convert an object to an array of [key, value] pairs
const person = { name: "John", age: 30 };

console.log(Object.entries(person)); // [ [ 'name', 'John' ], [ 'age', 30 ] ]


// ✅ Create a new object with values doubled
const nums = { a: 2, b: 4, c: 6 };
const newObj = {};

Object.entries(nums).forEach(([key, value]) => {
  newObj[key] = value * 2;
});

console.log(newObj); // { a: 4, b: 8, c: 12 }


// ✅ Filter out properties with non-string values
const mixed = { name: "Alex", age: 28, city: "Delhi", isStudent: false };
const obj1 = {};

Object.entries(mixed).forEach(([key, value]) => {
  if (typeof value !== 'string') {
    obj1[key] = value;
  }
});

console.log(obj1); // { age: 28, isStudent: false }


// ✅ Deeply nested object – print all keys
/*
Expected Output:
name
address
city
coords
lat
long
*/
const nestedObj = {
  name: "John",
  address: {
    city: "New York",
    coords: {
      lat: 40.7128,
      long: -74.0060
    }
  }
};

function nested(nestedObj) {
  Object.keys(nestedObj).forEach((key) => {
    console.log(key);
    if (typeof nestedObj[key] == 'object') {
      nested(nestedObj[key]);
    }
  });
}

nested(nestedObj);


// ✅ Deeply nested object – print keys like address.city or address.coords.lat
function nested2(nestedObj, prefix = '') {
  Object.keys(nestedObj).forEach((key) => {
    let fullkey = prefix ? `${prefix}.${key}` : key;
    console.log(fullkey);

    if (typeof nestedObj[key] == 'object') {
      nested2(nestedObj[key], fullkey);
    }
  });
}

nested2(nestedObj);


// ✅ Flatten a deeply nested object
// Input: { a: 1, b: { c: 2, d: { e: 3 } } }
// Output: { a: 1, 'b.c': 2, 'b.d.e': 3 }

const nestedobj3 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

function deeplyNested(nested, result = {}, prefix = '') {
  Object.entries(nested).forEach(([key, value]) => {
    let fullkey = prefix ? `${prefix}.${key}` : key;
    console.log(fullkey);

    if (typeof nested[key] == 'object') {
      deeplyNested(nested[key], result, fullkey);
    } else {
      result[fullkey] = value;
    }
  });
}

const result = {};
deeplyNested(nestedobj3, result);
console.log(result); // { a: 1, 'b.c': 2, 'b.d.e': 3 }


// ✅ Flatten a deeply nested object – keep only leaf keys (no dot paths)
// Input: { a: 1, b: { c: 2, d: { e: 3 } } }
// Output: { a: 1, c: 2, e: 3 }

function deeplyNested2(nestedobj3, result2 = {}) {
  Object.entries(nestedobj3).forEach(([key, value]) => {
    if (typeof nestedobj3[key] == 'object') {
      deeplyNested2(nestedobj3[key], result2);
    } else {
      result2[key] = value;
    }
  });
}

const result2 = {};
deeplyNested2(nestedobj3, result2);
console.log(result2); // { a: 1, c: 2, e: 3 }


// ✅ Group an array of objects by a property
const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
];

const data = users.reduce((obj, user) => {
  if (!obj[user.role]) {
    obj[user.role] = [];
  }
  obj[user.role].push(user.name);
  return obj;
}, {});

console.log(data); // { admin: [ 'Alice', 'Charlie' ], user: [ 'Bob' ] }


//Compare Two Objects Deeply

const deepEqual = (a,b)=>{
    if(a===b) return true ;
    if(typeof a !== 'object' || typeof b!='object' || a===null || b===null) return false;
    const keys1 = Object.keys(a);
    const keys2 = Object.keys(b);
    if(keys1.length !== keys2.length)  return false
    
    keys1.forEach((key)=>{
      if(!b[key]){
        return false;
      }

       if(!deepEqual(a[key],b[key])) return false;
     
    })

    return true;
}

const a = {
  name: "Alice",
  address: {
    city: "New York",
    zip: 10001
  }
};

const b = {
  name: "Alice",
  address: {
    city: "New York",
    zip: 10001
  }
};

let ans = deepEqual(a, b); 






