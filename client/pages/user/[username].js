import {useEffect, useState, useContext} from "react";
import {Avatar} from "antd";
import moment from "moment";
import {useRouter} from "next/router";
import {UserContext} from '../../context/index';
import axios from "axios";
import {RollbackOutlined} from "@ant-design/icons"
import Link from "next/link"

function Username() {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  const [user,setUser] = useState([]);

  useEffect(()=>{
    if (state) {
      fetchUser();
    }
  },[router.query.username]);

  const fetchUser = async () => {
    try{
      const response = await axios.get(`/user/${router.query.username}`);
      console.log("Following list", response);
      setPeople(response.data);
    } catch(err){
      console.log(err);
    }
  }
  const imageSource = (user) =>{
    if (user.image){
      return user.image.url;
    }
    else{
      return "/images/default.jpeg"
    }
  }

  
  return (
    <div className = "row col-md-6 offset-md-3">
      <pre>{JSON.stringify(user,null,4)}</pre>
       
      <Link href ="/user/profile">
        <a className = "d-flex justify-content-center pt-5">
          <RollbackOutlined/>
        </a>
      </Link>
    </div>
  )
}

export default Username;
