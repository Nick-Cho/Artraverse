import renderHTML from 'react-render-html';
import {UserContext} from "../../context/index.js";
import {useContext} from "react";
import {useRouter} from "next/router";
import moment from 'moment';
import {Avatar} from 'antd';
import PostImage from '../images/PostImage'
import {HeartOutlined, HeartFilled, CommentOutlined, EditOutlined, DeleteOutlined} from "@ant-design/icons"
function PostList({posts, handleDelete, handleLike, handleUnlike}) {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  return(
    <> {posts && posts.map((post) => (
        <div key = {post._id} className = "card mb-5">
        <div className = "card-header">
          <div>
            <Avatar size = {40} classsName="mb-2">{post.postedBy.first_name[0]}</Avatar>{" "}       
            <span className="pt-2 ml-3" style = {{marginLeft: "0.5rem"}}>{post.postedBy.first_name}</span>
            <span className="pt-2 ml-3" style = {{marginLeft: "0.5rem"}}>{moment(post.createdAt).fromNow()}</span>
          </div>
        </div>
        <div className = "card-body">
          {renderHTML(post.content)}
        </div>
        <div className = "card-footer">
          <PostImage url = {post.image.url}/>
          <div className = "d-flex pt-2">
            <HeartOutlined onClick ={()=> handleLike(post._id)} style={{cursor: "pointer"}} className = "text-danger pt-2 h5 px-2"/>
            <div className = "pt-2 pl-4" style ={{marginRight: "2rem"}}>likes</div>
            <CommentOutlined style={{cursor: "pointer"}} className = "text-danger pt-2 h5 px-2"/>
            <div className = "pt-2 pl-4" style ={{marginRight: "2rem"}}>comments</div>

            {state && state.user && state.user._id === post.postedBy._id && (
              <>
                <EditOutlined 
                style={{cursor: "pointer"}}
                onClick={()=> router.push(`/user/post/${post._id}`)}
                className = "text-danger pt-2 h5 px-2 mx-auto"/>
                <DeleteOutlined 
                onClick={()=>{handleDelete(post)}}
                className = "text-danger pt-2 h5 px-2" 
                style={{cursor: "pointer"}}
                />
              </>
            )}
          </div>
          
          
        </div>  
      </div>
      ))
    }   
    </>
  )
}

export default PostList;
