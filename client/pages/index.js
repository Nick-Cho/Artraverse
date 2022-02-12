import {UserContext} from '../context/index';
import {useContext, useEffect} from "react";
import axios from 'axios';
import Post from "../components/cards/Post";

const Home = ({posts}) =>{
  const [state,setState] = useContext(UserContext); //gives access to global state
  useEffect(()=>{
    console.log(posts);
  })
  return(
    <div className = 'container'>
      <div className = "row">
        <div className = 'col'>
          <h1 className = 'display-1 text-center py-5'>Home page</h1>
          <div className = "row">
            {posts.map((post)=>(
              <div className = "col-md-4">
                <Post key={post._id} post={post} home={true}/>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(){
  const response = await axios.get('/posts');
  console.log(response.data);
  return{
    props: {
      posts: response.data,
    }
  }
}

export default Home