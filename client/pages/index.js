import {UserContext} from '../context/index';
import {useContext, useEffect} from "react";
import axios from 'axios';
import Post from "../components/cards/Post";
import Head from "next/head";
const Home = ({posts}) =>{
  const [state,setState] = useContext(UserContext); //gives access to global state
  
  const head = () => {
    <Head>
      <title>A social network for artists </title>
      <meta 
      name="description" 
      content="A social network for artists"
      />
      <meta 
      property="og:description"
      content="A social network for artists"
      />
      <meta property="og:type" content="website"/>
      <meta property="og:site_name" content=""/>
      <meta property="og:url" content=""/>
      <meta property="og:image:secure_url" content=""/>
    </Head>
  }
  
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