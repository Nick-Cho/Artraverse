import {useEffect, useState, useContext} from 'react';
import {UserContext} from '../../context/index.js'
import axios from "axios";
import {useRouter} from "next/router";
import {SyncOutlined} from "@ant-design/icons";

function UserRoute({children}) {
  const [ok, setOk] = useState(false);
  const router = useRouter();
  const [state, setState] = useContext(UserContext);

  useEffect(()=>{
    console.log(state);
    if (state && state.token === "" ) {getCurrentUser()};
  },[state && state.token]);

  const getCurrentUser = async () =>{
    try{
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API}/current-user`, {
        headers: {
          "Authorization": `Bearer ${state.token}`,
        }
      });
      if (data.ok) setOk(true);
    }
    catch(err){
      router.push('/login') //making user log in if the current user doesn't match token
    } 
  }

  //Handles the case where the user tries to access the page with nothing in the state
  process.browser && state === null && setTimeout(()=>{
    getCurrentUser();
  }, 1000)

  return !ok ? 
  (<SyncOutlined 
    spin 
    className = "d-flex justify-content center display-1 text-primary"
    />) : 
   (<>{children}</>) 
}

export default UserRoute;
