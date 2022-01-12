import {SyncOutlined} from "@ant-design/icons";

const AuthForm = ({
  handleSubmit,
  fname,
  setFname,
  lname,
  setLname,
  email,
  setEmail,
  pswd,
  setPswd,
  secret,
  setSecret,
  loading
}) => {
return(
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
        Password must be at least 6 characters with. Use a mix of letters, numbers and symbols
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
      <button disabled = {!fname || !lname || !email || !secret || !pswd} className = "btn btn-primary col">
        {loading ? <SyncOutlined spin className ="py-1" /> : "Create Account"}
        </button>
    </div>
  </form>
)}

export default AuthForm