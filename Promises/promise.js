
function getData(id) {
   
  return new Promise((resolve, reject) => {
          if(id!==null && id==1){
             setTimeout(()=>{
              const data = {name:"harshal rajput"}
                resolve(data)
             },2000)
          }else{
            reject("user not found")
          }
  })
}

const userData = getData(4)
userData.then((data)=>{
  console.log(data)
}).catch((e)=>{
  console.log(e)
})




