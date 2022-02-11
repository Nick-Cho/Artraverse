import {useEffect, useState, useContext} from "react";
import {Avatar, Card} from "antd";
import moment from "moment";
import {useRouter} from "next/router";
import {UserContext} from '../../context/index';
import axios from "axios";
import {RollbackOutlined} from "@ant-design/icons"
import Link from "next/link"
const {Meta} = Card
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
      setUser(response.data);
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
      <div className = "pt-5 pb-5">
        <Card hoverable cover = {<img src = {imageSource(user)} alt = {user.first_name}/>}>
          <Meta title={user.first_name} description ={user.about}/>
          <p className = "pt-2 text-muted">{moment(user.createdAt).fromNow}</p>
          <div className = "d-flex justify-content-between">
            <span className = "btn btn-sm">
              {user.followers && user.followers.length} Followers
            </span>
            <span className = "btn btn-sm">
              {user.followers && user.following.length} Following
            </span>
          </div>
        </Card>
        
        <Link href ="/user/profile">
          <a className = "d-flex justify-content-center pt-5">
            <RollbackOutlined/>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Username;
