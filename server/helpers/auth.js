const bcrypt = require('bcrypt');

export function hashPassword (password) {
  const saltRounds = 10; //Controls how complicated the encryption is
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