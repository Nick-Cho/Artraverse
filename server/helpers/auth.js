const bcrypt = require('bcrypt');


//This function is responsible for hashing the password when we want to put it in the database
// export const hashPassword = (password) => {
//   return new Promise((resolve,reject) => {
//     //used to hash the password, number of Salt increases more processing power (8-low, 12-mid, 16-high) 
//     bcrypt.genSalt(12,(err,salt)=>{
//       if (err){
//         reject(err);
//       }
//       bcrypt.hash(password, salt, (err, hash) => {
//         if (err){
//           reject(err);
//         }
//         resolve(hash);
//       })
//     }) 
//   })
// }


export function hashPassword (password) {
  const saltRounds = 10;
  return new Promise((resolve,reject) => {  
    bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err){
      reject(err)
    }
    bcrypt.hash(password, saltRounds, function (err,hash){
      if (err){
        reject (err);
      }
      //console.log("Hash:",hash);
      resolve(hash);
    })
  })
})
} 


//This function is responsible for taking the raw password when a user signs in and comparing it to the hashed password in the database for authentication
export const comparePassword = (password, hashed) => {
  return bcrypt.compare(password,hashed); 
}