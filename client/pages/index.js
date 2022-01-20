import {UserContext} from '../context/index';
import {useContext} from "react";

const Home = () =>{
  const [state,setState] = useContext(UserContext); //gives access to global state
  return(
    <div className = 'container'>
      <div className = "row">
        <div className = 'col'>
          <h1 className = 'display-1 text-center py-5'>Home page</h1>
        </div>
      </div>
    </div>
  )
}

export default Home