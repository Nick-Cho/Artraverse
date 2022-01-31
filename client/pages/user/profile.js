import {useContext, useState, useEffect} from "react";
import {UserContext} from "../../context/index.js";
import UserRoute from "../../components/routes/UserRoute";
import CreatePost from "../../components/forms/PostForm";
import {useRouter} from "next/router";
import axios from 'axios';
import { toast } from "react-toastify";
import PostList from '../../components/cards/PostList'
const Home = () => {
  const router = useRouter();

  useEffect(()=>{
    fetchUserPosts();
  }, [])

  const [state, setState] = useContext(UserContext);
  //state
  const [content, setContent] = useState(""); //Content of the post
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(false); //Boolean for if image is uploading or not
  //posts
  const [posts, setPosts] = useState([]);
  const postSubmit = async (e) => {
    e.preventDefault(); //prevents client from refreshing
    const response = await axios.post('/create-post', {content, image});
    console.log("create post response: ", response);
    if (response.status === 400) {
      toast.error(response.data.message);
    }
    else{
      fetchUserPosts();
      toast.success('Post created');
      setContent("");
      setImage({});
    }
  }

  const handleImage = async (e) =>{
    const file = e.target.files[0]; //could my multiple files so index to grab the first image
    let formData = new FormData();
    formData.append('image', file); //Adding image data
    formData.append("content", content); //Adding caption data 
    // console.log([...formData]);
    setLoading(true);
    const response = await axios.post('/upload-image', formData);
    setImage({
      url: response.data.url,
      public_id: response.data.public_id
    });
    setLoading(false);
    //console.log("uploaded image data:", response);
  }

  const fetchUserPosts = async () => {
    try{
      const response = await axios.get('/user-posts');
      setPosts(response.data);
      // console.log("response data: ", response.data);
      // console.log("posts being sent to postslist component:", posts);
      
    } catch (err){
      console.log(err)
    }
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
          handleImage = {handleImage}
          loading = {loading}
          image={image}/>
          <br/>
          <PostList posts = {posts}/>
        </div>

      <div className = "col-md-4">
        <h2>SideBar</h2>
      </div>
      </div>  
    </UserRoute>
  );
};  
export default Home;