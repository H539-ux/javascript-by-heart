function deepClone(obj) {
  let newObj = {};

  if(Array.isArray(obj)){
    let arr = [];
    obj.forEach((item,i)=>{
      arr[i] = item;
    })

    return arr;
  }

  if(obj instanceof Date) return new Date(obj);

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
        newObj[key] = deepClone(obj[key])
    } else {
      newObj[key] = obj[key];
    }
  });

  return newObj;
}

let obj = {
  name: "harshal",
  age: 23,
  innobj: {
    surname: "Rajput",
  },
  items:[1,2,3,4,5]

};

let result = deepClone(obj)
result.innobj.surname = "rajput";
console.log(result);
console.log(obj);
