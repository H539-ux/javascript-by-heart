
let arr = [1, 2, 4];


// 1] MAP





/* 
  original map 
*/
const newarr = arr.map((num, index, arr) => {
      return num * 2;
})



/*
  polyfill for map
*/
Array.prototype.myMap = function (callback) {
        if(typeof callback !=='function'){
            throw new TypeError("can call myMap only on arrray")
        }
      let result = [];
      for (let i = 0; i < this.length; i++) {
            if (this.hasOwnProperty(i)) {    //=> to handle array like [1,,3] undefined due to a hole
                  const data = callback(this[i], i, this);
                  result.push(data);
            }

      }

      return result;
}

const myArr = arr.myMap((num, index, arr) => {
      return num + 1;
})




//2]FILTER 


/* 

ORIGINAL FILTER

*/
const newFilter = arr.filter((num, index, arr) => {
      return num % 2;
})



/* 
POLYFILLL 
*/


Array.prototype.myFilter = function (callback) {

      
        if(typeof callback !=='function'){
            throw new TypeError("can call myFilter only on arrray")
        }
      let result = [];

      for (let i = 0; i < this.length; i++) {
            if (this.hasOwnProperty(i)) {
                  if (callback(this[i], i, this)) {
                        result.push(this[i])
                  }
            }
      }
      return result;
}

const myFilter = arr.myFilter((num, index, arr) => {
      return num % 2;
})



// 3] REDUCE  



/* 
ORIGINAL 
*/

const data = arr.reduce((sum, num, index, arr) => {
      return sum + num
}, 0)


/*
Polyfill

*/

Array.prototype.myReduce = function (callback, initial ) {
      
        if(typeof callback !=='function'){
            throw new TypeError("can caLL myrduce only on arrray")
        }

      let acco;
      let i = 0;
      if (arguments.length >= 2) {
            acco = initial
      } else {
            while (i < this.length && !(i in this)) {
                  i++;
            }

            if (i >= this.length) {
                  throw new TypeError("reduce of  empty array with no initial value")
            }

            acco = this[i++];
      }

      for (; i < this.length; i++) {
            if (this.hasOwnProperty(i)) {
                  acco = callback(acco, this[i], i, this)
            }
      }
      return acco;
}

const myData = arr.myReduce((initial, num, index, arr) => {
      return initial * num;
}, 1)

