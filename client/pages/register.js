import {useState} from "react"
import axios from 'axios';
const Register = () => {
  const [fname, setFname] = useState(''); 
  const [lname, setLname] = useState(''); 
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState(''); 
  const [secret, setSecret] = useState('');  //This variable holds the answer to the password recovery question

  const handleSubmit = e =>{
    e.preventDefault(); //prevents browser from reloading
    // console.log(fname, lname, email, pswd, secret)
    axios.post('http://localhost:8000/api/register', {
      fname,
      lname,
      email,
      pswd,
      secret,
    })
    .then((res)=>{
      console.log(res)    
    })
    .catch(err => console.log(err))
  }
  return (
    <div className = 'container-fluid'>
      <div className ="row py-5 bg-secondary text-light">
        <div className = 'col text-center'>
          <h1>Create your Account</h1>
        </div>
      </div>

      <div className = 'row py-5'>
        <div className = 'col-md-6 offset-md-3'>
          <form onSubmit = {handleSubmit}>
            <div className = 'form-group p-2'>
              <div className = 'row'>
                <div className = 'col-sm-6'>
                <input value = {fname} type = "text" className = 'form-control' placeHolder="First Name" onChange = {(e) => setFname(e.target.value)}/>
                </div>
                <div className = 'col-sm-6'>
                <input value = {lname} type = "text" className = 'form-control' placeHolder = "Last Name" onChange = {(e) => setLname(e.target.value)}/>
                </div>  
              </div>              
            </div>

            <div className = 'form group p-2'>
              <input value = {email} type = "email" className = 'form-control' placeHolder="Email" onChange = {(e) => setEmail(e.target.value)}/>
              <small className = 'form-text text-muted'>
                You can use letters, numbers and periods
              </small>
            </div>

            <div className = 'form group p-2'>
              <input value = {pswd} type = "password" className = 'form-control' placeHolder="Password" onChange = {(e) => setPswd(e.target.value)}/>
              <small className = 'form-text text-muted'>
                Use a mix of letters, numbers and symbols
              </small>
            </div>

            <div className = 'form group p-2'>
              <select className = "form-control">
                <option>What is your favourite color?</option>
                <option>What is the name of your first pet?</option>
                <option>What is your mother's maiden name?</option>
              </select>

              <small className ='form-text text-muted'>
                Pick a question to use for password recovery
              </small>
            </div>

            <div className = 'form-group p-2'>
              <input value = {secret} type="text" placeHolder= 'Answer' className = "form-control" onChange= {(e) => setSecret(e.target.value)}/>
            </div>

            <div className = 'form-group p-2'>
              <button  className = "btn btn-primary col">Create Account</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;