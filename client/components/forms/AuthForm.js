import {SyncOutlined} from "@ant-design/icons";

const AuthForm = ({
  profileUpdate, //Tells the form whether we are on the profile update page or not
  username,
  setUsername,
  about,
  setAbout,
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
  loading,
  page
}) => {
return(
  <form onSubmit = {handleSubmit}>
      {profileUpdate &&
        <>
          <div className = 'form-group p-2'>
            <small>
              <label className = "text-muted"> Username </label>
            </small>
            <div className = 'row'>
              <div className = 'col-sm-12'>

                <input value = {username} type = "text" className = 'form-control' placeholder="Username" onChange = {(e) => setUsername(e.target.value)}/>
              </div>
            </div>              
          </div>
          
          <div className = 'form-group p-2'>
            <div className = 'row'>
              <div className = 'col-sm-12'>
              <input value = {about} type = "text" className = 'form-control' placeholder="About" onChange = {(e) => setAbout(e.target.value)}/>
              </div>
            </div>              
          </div>
        </>
      }
      
    {page !== 'login' &&(
      <div className = 'form-group p-2'>
        <div className = 'row'>
          <div className = 'col-sm-6'>
          <input value = {fname} type = "text" className = 'form-control' placeholder="First Name" onChange = {(e) => setFname(e.target.value)}/>
          </div>
          <div className = 'col-sm-6'>
          <input value = {lname} type = "text" className = 'form-control' placeholder = "Last Name" onChange = {(e) => setLname(e.target.value)}/>
          </div>  
        </div>              
      </div>
    )}

    <div className = 'form group p-2'>
      <input value = {email} type = "email" className = 'form-control' placeholder="Email" onChange = {(e) => setEmail(e.target.value)}/>
      <small className = 'form-text text-muted'>
        You can use letters, numbers and periods
      </small>
    </div>

    <div className = 'form group p-2'>
      <input value = {pswd} type = "password" className = 'form-control' placeholder="Password" onChange = {(e) => setPswd(e.target.value)}/>
      <small className = 'form-text text-muted'>
        Password must be at least 6 characters with. Use a mix of letters, numbers and symbols
      </small>
    </div>

    {/* Only Rendered if the page is the register page */}
    {page !== "login" &&
     (
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
    )}

    <div className = 'form-group p-2'>
      {/* Only disable button when email and password aren't present on the login page */}
      <button disabled = { page === "login" ?
                          !email || !pswd:
                          !fname || !lname || !email || !secret || !pswd} className = "btn btn-primary col">
        {page !== "login" &&(loading ? <SyncOutlined spin className ="py-1" /> : "Create Account")}
        {page === "login" && (loading ? <SyncOutlined spin className ="py-1" /> : "Login")}
      </button>
    </div>
  </form>
)}

export default AuthForm