import {useContext} from "react";
import {UserContext} from "../../context";

const Home = () => {
  const [state, useState] = useContext(UserContext);
  return(
    <div className = "container">
      <div className = "row">
        <div className = "col">
          <h1 className = "display-1 text-center">Profile Page</h1>
        </div>
      </div>
    </div>
  );
};  
export default Home;