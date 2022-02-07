import {useContext, useState, useEffect} from "react";
import {UserContext} from "../../context/index.js";
import UserRoute from "../../components/routes/UserRoute";
import CreatePost from "../../components/forms/PostForm";
import {useRouter} from "next/router";
import axios from 'axios';
import { toast } from "react-toastify";
import PostList from '../../components/cards/PostList'
import SuggestedFollowers from "../../components/cards/SuggestedFollowers"
import Link from "next/link";

const Home = () => {
  const router = useRouter();
  const [state, setState] = useContext(UserContext);
  //state
  const [content, setContent] = useState(""); //Content of the post
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(false); //Boolean for if image is uploading or not
  //posts
  const [posts, setPosts] = useState([]);
  //List of suggested followers
  const [people, setPeople] = useState([]);
  //Variable to track the amount of users are being followed by a given user
  const [numFollowing, setNumFollowing] = useState("");

  useEffect(()=>{
    if (state){
      //console.log("useeffect state: ", state);
      // setNumFollowing(state.user.following);
      newsFeed();
      findPeople();
    }
  }, [state])

  const handleLike = async (_id) => {
    // console.log("liked post: ", _id);
    try{
      const response = await axios.put('/liked-post', {_id});
      //console.log('liked: ', response);
      newsFeed();
    } catch (err) {
      console.log(err);
    }
  }

  const handleUnlike = async (_id) => {
    //console.log("unliked post: ",_id);
    try{
      const response = await axios.put('/unliked-post', {_id});
      //console.log('unliked: ', response);
      newsFeed();
    } catch (err) {
      console.log(err);
    }
  }

  const findPeople = async () => {
    const response = await axios.get("/find-people");
    //console.log("response from find people endpoint", response);
    if (response ){
      if (response.status === 200){
        setPeople(response.data);
      }
      else if (response.status === 400){
        toast.error(response.data.message)
      }
    }
    
  }

  const handleFollow =  async (user) => {
    //console.log("handle follow user: ", user);
    try{
      const response;
      const res = await axios.put('/user-follow', {_id: user._id})
      .then((r) => {
          response = r;
        });
      // console.log("reseponse from handlefollow", response)
      // update local storage, update user, keep token
      let auth = JSON.parse(localStorage.getItem("auth"));
      auth.user = response.data;
      localStorage.setItem("auth", JSON.stringify(auth));

      // update context
      setState({...state, user: response.data});
      console.log("logging from handle follow. User: ", state.user);
      //update suggested follower state
      let filtered = people.filter((p)=>{p._id !== user._id});
      setPeople(filtered);
      findPeople();

      //rerender the posts in posts page
      newsFeed();
      toast.success(`Following ${user.username}`);

    } catch(err){
      console.log(err);
    }
  }

  const postSubmit = async (e) => {
    e.preventDefault(); //prevents client from refreshing
    const response = await axios.post('/create-post', {content, image});
    console.log("create post response: ", response);
    if (response.status === 400) {
      toast.error(response.data.message);
    }
    else{
      newsFeed();
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

  const newsFeed = async () => {
    try{
      const response = await axios.get('/news-feed');
      //console.log(response);
      setPosts(response.data);
      
      
    } catch (err){
      console.log(err)
    }
  }

  const handleDelete = async (post) =>{
    try{
      const answer = window.confirm("Are you sure you want to delete this post?");
      if (!answer) return;
      const response = await axios.delete(`/delete-post/${post._id}`);
      if (response.status == 200){
        toast.error('Post Deleted!');
      }
      newsFeed();
    } 
    catch(err){
      console.log(err);
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
          <PostList 
          posts = {posts} 
          handleDelete={handleDelete} 
          handleLike={handleLike} 
          handleUnlike={handleUnlike}
          />
        </div>

      <div className = "col-md-4">
        {state && state.user && state.user.following &&
        <Link href = {`/user/following`}>
          <a className = "h6">{state.user.following.length} Following</a>
        </Link>
        
        }
        <SuggestedFollowers handleFollow={handleFollow} people={people}/>
      </div>
      </div>  
    </UserRoute>
  );
};  
export default Home;