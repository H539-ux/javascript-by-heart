
/* onSearch function will get called only after 300 sec we use concept of closure in this debounce function  
 return function(...args) is closure to debounce so it has access to its lexical scope  making it remind the value of timerID
 when ever debounce is called it will first clear timerId as we need to strt fresh for upto 300sec
what is ...args here it i actual e the event 
{leading =false,trailing=true}={} this is soething when user want to type fast or first or in lrading then we can pass true here
*/


const inputField = document.getElementById('search-box');
const outputField = document.getElementById('output');

function debounce(func,delay,{leading =false,trailing=true}={}){
   let timerId ;
  
   return function(...args){
    if(leading && timerId){
      func.apply(this,args)
    }
    clearTimeout(timerId)
       timerId =  setTimeout(()=>{
            func.apply(this,args)

            timerId = null 
        },delay)
   }
}

const debouncedFunction = debounce(onSearch,300);

function onSearch(e){
      outputField.textContent = e.target.value 
}

inputField.addEventListener('input',debouncedFunction)



