const Register = () => {
  return (
    <div className = 'container-fluid'>
      <div className ="row py-5 bg-secondary text-light">
        <div className = 'col text-center'>
          <h1>Create your Account</h1>
        </div>
      </div>

      <div className = 'row py-5'>
        <div className = 'col-md-6 offset-md-3'>
          <form>
            <div className = 'form-group p-2'>
              <div className = 'row'>
                <div className = 'col-sm-6'>
                <input type = "text" className = 'form-control' placeHolder="First Name"/>
                </div>
                <div className = 'col-sm-6'>
                <input type = "text" className = 'form-control' placeHolder = "Last Name"/>
                </div>  
              </div>
              
            </div>


            <div className = 'form group p-2'>
              <small>
                <label className = 'text-muted'>Your Email Address</label>
              </small>
              <input type = "password" className = 'form-control' placeHolder="Enter Email"/>
            </div>

            <div className = 'form group p-2'>
              <small>
                <label className = 'text-muted'>Pick a question</label>
              </small>
              <select className = "form-control">
                <option>What is your favourite color?</option>
                <option>What is the name of your first pet?</option>
                <option>What is your mother's maiden name?</option>
              </select>

              <small className ='form-text text-muted'>
                These questions will be used for password recovery
              </small>
            </div>

            <div className = 'form-group p-2'>
              <input type="text" placeHolder= 'Answer' className = "form-control"/>
            </div>

            <div className = 'form-group p-2'>
              <button className = "btn btn-primary col">Create Account</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;