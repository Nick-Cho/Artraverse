import {useEffect, useState, useContext} from "react";
import {Avatar, List, Card} from "antd";
import moment from "moment";
import {useRouter} from "next/router";
import {UserContext} from '../../context/index';
import axios from "axios";
import {RollbackOutlined} from "@ant-design/icons"
import Link from "next/link"
function Following() {
  const [state] = useContext(UserContext);
  const router = useRouter();
  const [people,setPeople] = useState([]);

  useEffect(()=>{
    if (state) {
      fetchFollowing();
    }
  },[state && state.token])

  const fetchFollowing = async () => {
    try{
      const response = await axios.get("/user-following");
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

  const handleUnfollow = async() => {

  }
  return (
    <div className = "row col-md-6 offset-md-3">
      <List itemLayout="horizontal" dataSource = {people} renderItem={(user) => (
        <List.Item>
          <List.Item.Meta 
          avatar = {<Avatar src ={imageSource(user)}/>}
          title = {
          <div className = "d-flex justify-content-between">
            {user.username} 
            <span onClick={() => handleUnfollow(user)} className = "text-primary" style = {{cursor: "pointer"}}>Unfollow</span>
          </div>
          }
          />
        </List.Item>
      )}/> 
      <Link href ="/user/profile">
        <a className = "d-flex justify-content-center pt-5">
          <RollbackOutlined/>
        </a>
      </Link>
    </div>
  )
}

export default Following;
