
 class User {
      constructor(name , password, email){
          this.name = name;
          this.password=password;
          this.email = email
       }
 }




 let users = [] ; 
let tokens = new Map(); 
function create(user){
      return new Promise((resolve,reject)=>{
         if(!user.name || !user.password || !user.email){
          reject(new Error("missing data"));
          return
         }
         
         const newToken = Math.random().toString(36).substring(2);
         tokens.set(newToken,user.email);
         users.push(user)
        
         setTimeout(()=>{
          const res = {msg:"user created verify token " , token:newToken}
           resolve(res);
         },2000)
      })
}

function verifyToken(token){
    return new Promise((resolve,reject)=>{
       if(!token){
        reject(new Error("token missing"));
        return 
       }
      
       if(!tokens.has(token)){
         reject(new Error("incorrect token"));
         return 
       }


       const email =tokens.get(token) ;

       const user = users.find((u)=>u.email === email)
       if(!user){
        reject(new Error("user not found"))
        return 
       }
      setTimeout(()=>{
        const res = {msg:`verified you ${user.name} welcome to our platform`}
        resolve(res);
      },2000)
    })
}

function login(...args){
      [email,password] = args
     return new Promise((resolve,reject)=>{
           if(!email || !password){
            reject(new Error("email or password missing"))
            return ;
           }

           const user = users.find((u)=>u.email === email);
           if(!user){
            reject(new Error("user not found"))
            return ;
           }
          
           if(user.password!==password){
              reject(new Error("incorrect password or email"));
              return 
           }

           setTimeout(()=>{
            const data = {msg:"login successfull"};
            resolve(data)
           },2000)
           
     })
}



const user = new User("harshal","12345","harsh@312");

 




create(user)
  .then((res) => {
    console.log(res.msg); // "user created verify token"
    return verifyToken(res.token);
  })
  .then((res) => {
    console.log(res.msg); // "verified you harshal welcome to our platform"
    return login(user.email, user.password);
  })
  .then((res) => {
    console.log(res.msg); // "login successfull"
  })
  .catch((e) => {
    console.error("Error:", e.message);
  });

/* 
    
   user will signup   creat account   it will send name an password 

   then 


*/