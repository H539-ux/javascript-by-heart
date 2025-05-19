  const input = document.getElementById('search-box')
  const output = document.getElementById('output')




  const throttle = (func,delay)=>{
    let timer = 0;
    return function(...args){
      const current =  Date.now();
        if(current-timer>=delay || timer ==0){
          console.log(`${current} - ${timer} = ${current-timer}`)
          func.apply(this,args);
          timer=current;
        }
    }
  }


 const search = (e)=>{
  output.textContent = e.target.value;
 }
  const throttleFunction = throttle(search,500)
  input.addEventListener('input',throttleFunction)