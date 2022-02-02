import {useState, useContext} from "react";
import {useRouter} from "next/router";
import axios from 'axios';
import { toast } from "react-toastify";
import {Modal} from "antd";
import Link from 'next/link';

import AuthForm from '../../../components/forms/AuthForm.js'
import { UserContext } from "../../../context/index.js";
import { Router } from "next/router";
import { EyeTwoTone } from "@ant-design/icons";
const ProfileUpdate = () => {
  const [username, setUsername] = useState("");
  const [about,setAbout] = useState("");
  const [fname, setFname] = useState(''); 
  const [lname, setLname] = useState(''); 
  const [email, setEmail] = useState('');
  const [pswd, setPswd] = useState(''); 
  const [secret, setSecret] = useState('');  //This variable holds the answer to the password recovery question
  const [ok, setOk] = useState(false); //Variable is used to hold the value of whether a use was succesfully registered or not 
  const [loading, setLoading] = useState(false);
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  const handleSubmit = async (e) =>{
    e.preventDefault(); //prevents browser from reloading
    // console.log(fname, lname, email, pswd, secret)
    setLoading(true);
   
    const response = await axios.post(`/register`, {
    fname,
    lname,
    email,
    pswd,
    secret,
    });
    let res = response.response;
    console.log("register page api call data:",response);
    if (response.status == 200){
      setFname("");
      setLname("")
      setEmail("");
      setPswd("");
      setSecret("");
      setOk(response.data.ok);
      setLoading(false);
    }
    else{
      toast.error(response.data.message);
      setLoading(false);
    }
  }

  return (
    <div className = 'container-fluid'>
      <div className ="row py-5 bg-secondary text-light">
        <div className = 'col text-center'>
          <h1>Profile</h1>
        </div>
      </div>

      <div className = 'row py-5'>
        <div className = 'col-md-6 offset-md-3'>
          <AuthForm 
          profileUpdate = {true}
          username = {username}
          setUsername = {setUsername}
          about = {about}
          setAbout = {setAbout}
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

export default ProfileUpdate;