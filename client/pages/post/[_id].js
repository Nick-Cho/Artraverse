import {useState,useEffect} from 'react';
import axios from "axios";
import {useRouter} from "next/router";
import UserRoute from "../../components/routes/UserRoute"
import {toast} from "react-toastify";
import Post from '../../components/cards/Post';
import Link from 'next/link';
import {RollbackOutlined} from '@ant-design/icons'
function PostComments() {
  const [post,setPost] = useState({});
  const router = useRouter();
  const _id = router.query._id;

  useEffect(()=>{
    if (_id) fetchPost();
  }, [_id]);

  const fetchPost = async() => {
    try{
      const {data} = await axios.get(`/user-post/${_id}`);
      setPost(data);

    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <div className = "row col-md-8 offset-md-2 ">
        <Post post={post} commentsCount={100}/>
      </div>
      <Link href = "/user/profile">
        <a className = "d-flex justify-content-center p-5">
          <RollbackOutlined/>
        </a>
      </Link>
    </div>
  )
}

export default PostComments