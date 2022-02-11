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
import {Modal, Pagination} from "antd";
import CommentForm from "../../components/forms/CommentForm"
import Search from "../../components/Search"
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
  //comments
  const [comment,setComment] = useState("");
  //keeps track of if we should show the comments text box or not
  const [showComment, setShowComment] = useState(false)
  //indicates which post to pop comment textbox under
  const [currentPost, setCurrentPost] = useState({});  
  //total posts received from the database
  const [totalPosts, setTotalPosts] = useState(0);
  //tracks the page of posts that the user is currently on
  const [page, setPage] = useState(1);
  useEffect(()=>{
    if (state && state.token){
      //console.log("useeffect state: ", state);
      // setNumFollowing(state.user.following);
      newsFeed();
      findPeople();
    }
  }, [state, page]);

  useEffect(()=>{
    try{
      const {data} = axios.get('/total-posts');
      setPosts(data);
    } catch (err){
      console.log(err);
    }
  },[])

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
      const response = {};
      await axios.put('/user-follow', {_id: user._id})
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
      setPage(1); //takes user back to first page to see their new post
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
      const response = await axios.get(`/news-feed/${page}`);
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
  
  const handleComment = (post) => {
    setCurrentPost(post);
    setShowComment(true);
  }

  const addComment = async (e) => {
    e.preventDefault();
    // console.log("Adding comment to this post: ", currentPost._id);
    // console.log("Comment: ", comment);
    try{
      const response = await axios.put("/add-comment", {
        postId: currentPost._id, 
        comment,
      })
      //console.log("add comment", response);
      setComment("");
      setShowComment(false);
      newsFeed();
    } catch (err) {
      console.log(err);
    }
  }

  const removeComment = async(postId, comment) => {
    // console.log(postId, comment);
    let answer = window.confirm("Are you sure you want to delete this comment?")
    
    try {
      const response = await axios.put("/remove-comment", {postId,comment})
      console.log("Comment removed data: ", response);
      newsFeed(); //refreshing post to show comment is removed
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
          handleComment={handleComment}
          removeComment = {removeComment}
          />

          <Pagination  
          current={page} 
          total = {(totalPosts/3)*10} //shows 3 posts on each page
          onChange={(value)=>{setPage(value)}}
          className = "pb-5"
          />
        </div>

        
        
        <div className = "col-md-4">
          <Search/>
          <br/>
          {state && state.user && state.user.following &&
          <Link href = {`/user/following`}>
            <a className = "h6">{state.user.following.length} Following</a>
          </Link>
          
          }
          <SuggestedFollowers handleFollow={handleFollow} people={people}/>
        </div>
        <Modal 
        visible = {showComment} 
        onCancel={()=>setShowComment(false)} 
        title = "Comment"
        footer={null}
        >
        <CommentForm addComment={addComment} comment={comment} setComment={setComment}/>
        </Modal>  
      </div>  
    </UserRoute>
  );
};  
export default Home;