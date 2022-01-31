import {useRouter} from "next/router";
import axios from "axios";
import {useEffect, useState} from 'react';

function EditPost() {
  const [post,setPost] = useState({});
  const router = useRouter();
  
  const _id = router.query._id; //Has value of "_id" because the file name is _id
  useEffect(()=>{
    if (_id){
      fetchPost();
    }
  }, [_id])
  //console.log("router: ", router);
  const fetchPost = async () =>{
    const response = await axios.get(`/user-post/${_id}`);
    if (response.status == 200){
      setPost(response.data);
    }
  } 
  return (
    <>
      <pre>{JSON.stringify(post,null,4)}</pre>
    </>
  )
}

export default EditPost;
