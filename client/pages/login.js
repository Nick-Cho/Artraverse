import {useState} from "react"
import axios from 'axios';
import { toast } from "react-toastify";
import {Modal} from "antd";
import Link from 'next/link';
import {useRouter} from "next/router";
import AuthForm from '../components/forms/AuthForm.js'
const Login = () => {
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState(''); 
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e) =>{
    e.preventDefault(); //prevents browser from reloading
    // console.log(fname, lname, email, pswd, secret)
    setLoading(true);
    try{
      const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API}/login`, {
      email,
      pswd,   
      });
      router.push("/");

    } catch (err){
       toast.error(err.response.data.message);
       setLoading(false);
     }
    
  }
  return (
    <div className = 'container-fluid'>
      <div className ="row py-5 bg-secondary text-light">
        <div className = 'col text-center'>
          <h1>Login</h1>
        </div>
      </div>

      <div className = 'row py-5'>
        <div className = 'col-md-6 offset-md-3'>
          <AuthForm 
          handleSubmit = {handleSubmit} 
          email={email}
          setEmail = {setEmail}
          pswd = {pswd}
          setPswd = {setPswd}
          loading = {loading}
          page = "login"
          />
        </div>
      </div>

      <div className = "row">
        <div className = "col">
          <p className = "text-center">Not yet registered?{" "}
            <Link href = "/register">
              <a>Register</a>
            </Link>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Login;