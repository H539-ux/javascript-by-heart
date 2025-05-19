
let arr = [1,2,4,3,5,6,8];


// 1] MAP





/* 
  original map 
*/
const newarr = arr.map((num,index,arr)=>{
     return  num*2;
})



/*
  polyfill for map
*/
Array.prototype.myMap = function (callback){
      let result = [];
      for( let i =0 ; i<this.length;i++){
            if(this.hasOwnProperty(i)){    //=> to handle array like [1,,3] undefined due to a hole
            const data = callback( this[i], i,this);
            result.push(data);
            }
           
      }

      return result;
}

const myArr = arr.myMap((num,index,arr)=>{
      return num+1;
})




//2]FILTER 


/* 

ORIGINAL FILTER

*/
const newFilter = arr.filter((num,index,arr)=>{
   return num%2;
})



/* 
POLYFILLL 
*/


Array.prototype.myFilter = function(callback){
      let result=[];

      for(let i=0;i<this.length;i++){
            if(this.hasOwnProperty(i)){
                  if(callback(this[i],i,this)){
                        result.push(this[i]) 
                  }
            }
      }
      return result;
}

const myFilter = arr.myFilter((num,index,arr)=>{
      return num%2;
})



// 3] REDUCE  



/* 
ORIGINAL 
*/

const data = arr.reduce((sum,num,index,arr)=>{
      return sum+num
},0)


/*
Polyfill

*/

Array.prototype.myReduce = function(callback,initial=0){
      
      for(let i = 0 ;i<this.length;i++){
            callback(initial,)
      }
}