import {useState,useContext} from "react";
import {UserContext} from "../context/index";
import axios from 'axios';

function Search() {
  const [state,setState] = useContext(UserContext);
  const [query, setQuery] = useState("") //tracks the search bar user input
  const searchUser = e =>{
    e.preventDefault();
    console.log(`Find ${query} from database`)
    try{
      const {data} = axios.get(`/search-user/${query}`);
      console.log("search user response: ", data);
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
          onChange= {(e)=>setQuery(e.target.value)} 
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
    </>
  )
}

export default Search