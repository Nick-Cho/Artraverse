import {useState,useContext} from "react";
import {UserContext} from "../context/index";
import axios from 'axios';
import SuggestedFollowers from "../components/cards/SuggestedFollowers";
function Search({handleFollow}) {
  const [state,setState] = useContext(UserContext);
  const [query, setQuery] = useState("") //tracks the search bar user input
  const [result, setResult] = useState([]);
  const searchUser = e =>{
    e.preventDefault();
    //console.log(`Find ${query} from database`)
    try{
      const response = {};
     axios.get(`/search-user/${query}`).then((r)=>{
      response = r;  
      //console.log("search user response: ", response);
      setResult(response.data);
      // console.log("Result: ", result)
       });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <form 
      className = "form-inline row" 
      onSubmit = {searchUser}
      >
        <div className = "col-8">
          <input 
          onChange= {(e)=>{
            setQuery(e.target.value);
            setResult([]);
          }} 
          value = {query}
          className = "form-control"
          placeHolder="Search"
          />
        </div> 
        
        <div className = "col-4">
          <button 
          className = "btn btn-outline-primary col-12" 
          type = "submit"
          >
            Submit
          </button>
        </div>
      </form>
      
      {result.length != 0 &&
      <SuggestedFollowers 
      people = {result} 
      handleFollow={handleFollow}
      />
      }
    
    </>
  )
}

export default Search