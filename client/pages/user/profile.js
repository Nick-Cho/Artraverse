import {useContext, useState} from "react";
import {UserContext} from "../../context/index.js";
import UserRoute from "../../components/routes/UserRoute";
import CreatePost from "../../components/forms/CreatePostForm";
import {useRouter} from "next/router";
import axios from 'axios';
import { toast } from "react-toastify";
const Home = () => {
  const router = useRouter();

  const [state, setState] = useContext(UserContext);
  const [content, setContent] = useState(""); //Content of the post
  
  const postSubmit = async (e) => {
    e.preventDefault(); //prevents client from refreshing
    const response = await axios.post('/create-post', {content});
    console.log("create post response: ", response);
    if (response.status === 400) {
      toast.error(response.data.message);
    }
    else{
      toast.success('Post created')
      setContent("");
    }
  }

  const handleImage = async (e) =>{
    const file = e.target.files[0]; //could my multiple files so index to grab the first image
    let formData = new FormData();
    formData.append('image', file); //Adding image data
    formData.append("content", content); //Adding caption data 
    console.log([...formData]);

  }
  return(
    <UserRoute>
      <div className = "container-fluid">
        <div className = "row py-5 ">
          <div className = "col text-center">
            <h1 className = "display-1 text-center">Profile Page</h1>
          </div>
        </div>
      </div>
      
      <div className = "row py-3">
        <div className = "col-md-8">
          <CreatePost 
          content = {content} 
          setContent = {setContent} 
          postSubmit = {postSubmit} 
          handleImage = {handleImage}/>
        </div>
        <div className = "col-md-4">
          <h2>SideBar</h2>
        </div>
      </div>
    </UserRoute>
  );
};  
export default Home;