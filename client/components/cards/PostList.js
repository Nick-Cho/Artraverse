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
import Post from '../../components/cards/Post'
function PostList({posts, handleDelete, handleLike, handleUnlike, handleComment, removeComment}) {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();
  
  return(
    <> {posts && posts.map((post) => (
       <Post 
       
       post={post} 
       handleDelete={handleDelete} 
       handleLike={handleLike} 
       handleUnlike={handleUnlike} 
       handleComment={handleComment}
       removeComment={removeComment}
       commentsCount={2}
       />
      ))
    }   
    </>
  )
}

export default PostList;
