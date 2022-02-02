import {useState, useContext, useEffect} from "react";
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

  useEffect(()=>{
    if (state != null){
      console.log("user from state called in update: ", state);
    }
    setUsername(state.user.username);
    setAbout(state.user.about);
    setFname(state.user.first_name);
    setLname(state.user.last_name);
    setEmail(state.user.email);

  }, [state != null && state.user])

  const handleSubmit = async (e) =>{
    e.preventDefault(); //prevents browser from reloading
    // console.log(fname, lname, email, pswd, secret)
    setLoading(true);
   
    const response = await axios.put(`/profile-update`, {
    username,
    about,
    fname,
    lname,
    email,
    pswd,
    secret
    });
    console.log("register page api call data:",response);
    if (response.status == 200){
      setOk(true);
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
              Succesfully updated profile!
            </p>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default ProfileUpdate;