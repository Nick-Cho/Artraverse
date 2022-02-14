import {UserContext} from '../context/index';
import {useContext, useEffect} from "react";
import axios from 'axios';
import Post from "../components/cards/Post";
import Head from "next/head";
import Link from "next/link"
import io from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKETIO, {
  reconnection: true,
})
const Home = ({posts}) =>{
  const [state,setState] = useContext(UserContext); //gives access to global state
  
  // useEffect(()=>{
  //   //console.log("SOCKETIO on join", socket);
  //   socket.on("receive-message", (newMessage)=> {
  //     alert(newMessage);
  //   })
  // },[])
  
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
      <meta property="og:site_name" content="Artraverse"/>
      <meta property="og:url" content="http://artaverse.com"/>
      <meta 
      property="og:image:secure_url" 
      content="http://artraverse.com/images/logo.png"/>
    </Head>
  }
  
  return(
    <div className = 'container'>
      {/* <button onClick={()=>{
        socket.emit('send-message', "This is nick");
      }}>
        Send Message
      </button> */}
      <div className = "row">
        <div className = 'col'>
          <h1 className = 'display-1 text-center py-5'>Home page</h1>
          <div className = "row">
            {posts.map((post)=>(
              <div key={post._id} className = "col-md-4">
                <Link href={`/post/${post._id}`}>
                  <a>
                    <Post key={post._id} post={post} home={true}/>
                  </a>
                </Link>
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
  //console.log(response.data);
  return{
    props: {
      posts: response.data,
    }
  }
}

export default Home