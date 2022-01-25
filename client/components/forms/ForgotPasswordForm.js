import {SyncOutlined} from "@ant-design/icons";

const ForgotPasswordForm = ({
  handleSubmit,
  email,
  setEmail,
  newPswd,
  setNewPswd,
  secret,
  setSecret,
  loading,
  page
}) => {
return(
  <form onSubmit = {handleSubmit}>
    <div className = 'form group p-2'>
      <input value = {email} type = "email" className = 'form-control' placeholder="Email" onChange = {(e) => setEmail(e.target.value)}/>
      <small className = 'form-text text-muted'>
        You can use letters, numbers and periods
      </small>
    </div>

    <div className = 'form group p-2'>
      <input value = {newPswd} type = "password" className = 'form-control' placeholder="Enter New Password" onChange = {(e) => setNewPswd(e.target.value)}/>
      <small className = 'form-text text-muted'>
        New Password
      </small>
    </div>

    {/* Only Rendered if the page is the register page */}

     
     <>
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
      <input value = {secret} type="text" placeholder= 'Answer' className = "form-control" onChange= {(e) => setSecret(e.target.value)}/>
    </div>
    </>
  
    <div className = 'form-group p-2'>
      {/* Only disable button when email and password aren't present on the login page */}
      <button disabled = {!email || !newPswd || !secret} className = "btn btn-primary col">
       {loading ? <SyncOutlined spin className ="py-1" /> : "Submit"} 
      </button>
    </div>
  </form>
)}

export default ForgotPasswordForm