import { useContext} from "react";
import {Avatar, List} from "antd";
import moment from "moment";
import {useRouter} from "next/router";
import {UserContext} from '../../context/index';
import {imageSource} from '../../functions'

function SuggestedFollowers({people, handleFollow, handleUnfollow}) {
  const [state] = useContext(UserContext);
  const router = useRouter();

  return (
    <div>
      <List itemLayout="horizontal" dataSource = {people} renderItem={(user) => (
        <List.Item>
          <List.Item.Meta 
          avatar = {<Avatar src ={imageSource(user)}/>}
          title = {
          <div className = "d-flex justify-content-between">
            {user.username} {}
            {state && state.user && user.followers && user.followers.includes(state.user._id) ? (
            <span onClick={() => handleUnfollow(user)} className = "text-primary" style = {{cursor: "pointer"}}>
              Unfollow
            </span>
            ) : (
            <span onClick={() => handleFollow(user)} className = "text-primary" style = {{cursor: "pointer"}}>
              Follow
            </span>
            )}
          </div>
          }
          />
        </List.Item>
      )}/> 
    </div>
  )
}

export default SuggestedFollowers;
