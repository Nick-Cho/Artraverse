import {useState} from "react"
import axios from 'axios';
import { toast } from "react-toastify";
import {Modal} from "antd";
import Link from 'next/link';

import AuthForm from '../components/forms/AuthForm.js'
const Register = () => {
  const [fname, setFname] = useState(''); 
  const [lname, setLname] = useState(''); 
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState(''); 
  const [secret, setSecret] = useState('');  //This variable holds the answer to the password recovery question
  const [ok, setOk] = useState(false); //Variable is used to hold the value of whether a use was succesfully registered or not 
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) =>{
    e.preventDefault(); //prevents browser from reloading
    // console.log(fname, lname, email, pswd, secret)
    setLoading(true);
    try{
      const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, {
      fname,
      lname,
      email,
      pswd,
      secret,
      });
      setFname("");
      setLname("")
      setEmail("");
      setPswd("");
      setSecret("");
      setOk(data.ok);
      setLoading(false);
    } catch (err){
       console.log(err.response.data.message);
       toast.error(err.response.data.message);
       setLoading(false);
     }
    
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
          <AuthForm 
          handleSubmit = {handleSubmit} 
          fname = {fname}
          setFname = {setFname}
          lname = {lname}
          setLname = {setLname}
          email={email}
          setEmail = {setEmail}
          pswd = {pswd}
          setPswd = {setPswd}
          secret = {secret}
          setSecret = {setSecret}
          loading = {loading}
          />
        </div>
      </div>

      <div className ="row">
        <div className = "col">
          <Modal title = "Congratulations" visible = {ok} onCancel = {()=>{setOk(false)}} footer = {null}>
            <p>
              Succesfully registered!
            </p>
            <Link href = "/login">
              <a className = "btn btn-primary btn-sm">Login</a>
            </Link>
          </Modal>
        </div>
      </div>

      <div className = "row">
        <div className = "col">
          <p className = "text-center">Already registered?{" "}
            <Link href = "/login">
              <a >Login</a>
            </Link>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Register;