import {useState,useEffect} from 'react';
import axios from "axios";
import {useRouter} from "next/router";
import UserRoute from "../../components/routes/UserRoute"
import {toast} from "react-toastify";

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
      <pre>
      {JSON.stringify(post, null, 4)}
      </pre>
    </div>
  )
}

export default PostComments