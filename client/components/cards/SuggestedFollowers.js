import {useEffect, useContext} from "react";
import {Avatar, List, Card} from "antd";
import moment from "moment";
import {useRouter} from "next/router";
import {UserContext} from '../../context/index';


function SuggestedFollowers({people}) {
  const [state] = useContext(UserContext);

  const router = useRouter();

  useEffect(()=>{
    console.log("people: ", people)
  })
  return (
    <div>
      <List itemLayout="horizontal" dataSource = {people} renderItem={(user) => (
        <List.Item>
          <List.Item.Meta title = {
          <div className = "d-flex justify-content-between">
            {user.username} 
            <span className = "text-primary" style = {{cursor: "pointer"}}>Follow</span>
          </div>
          }
          />
        </List.Item>
      )}/> 
    </div>
  )
}

export default SuggestedFollowers;
