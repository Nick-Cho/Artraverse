import renderHTML from 'react-render-html';
import {UserContext} from "../../context/index.js";
import {useContext} from "react";
import {useRouter} from "next/router";
import moment from 'moment';
import Link from "next/link"
import {Avatar} from 'antd';
import PostImage from '../images/PostImage'
import {HeartOutlined, HeartFilled, CommentOutlined, EditOutlined, DeleteOutlined} from "@ant-design/icons"
import {imageSource} from "../../functions"
function PostList({posts, handleDelete, handleLike, handleUnlike, handleComment}) {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  
  return(
    <> {posts && posts.map((post) => (
        <div key = {post._id} className = "card mb-5">
        <div className = "card-header">
          <div>
            {/* <Avatar size = {40} classsName="mb-2">{post.postedBy.first_name[0]}</Avatar>{" "}        */}
            <Avatar size = {40} classsName="mb-2" src={imageSource(post.postedBy)}/>
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
            
            {state && state.user && post.likes && post.likes.includes(state.user._id) ? 
            (
              <>
                <HeartFilled
                onClick ={()=> handleUnlike(post._id)} 
                style={{cursor: "pointer"}} 
                className = "text-danger pt-2 h5 px-2"
                />
              </>
            ) :
            (
              <>
                <HeartOutlined 
                onClick ={()=> handleLike(post._id)} 
                style={{cursor: "pointer"}} 
                className = "text-danger pt-2 h5 px-2"
                />  
              </>
            )}

            
            <div className = "pt-2 pl-4" style ={{marginRight: "2rem"}}>
              {post.likes.length} 
              {post.likes.length == 1 ? " like" : " likes"}
            </div>
            <CommentOutlined 
            onClick = {()=>handleComment(post)}
            style={{cursor: "pointer"}} 
            className = "text-danger pt-2 h5 px-2"/>
            
            <div className = "pt-2 pl-4" style ={{marginRight: "2rem"}}>
              <Link href = {`/post/${post._id}`}>
                <a> 
                  {post.comments.length}
                  {post.comments.length == 1 ? " comment" : " comments"}
                </a>
              </Link>
              
              </div>

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
