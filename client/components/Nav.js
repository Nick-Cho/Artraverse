import {useContext, useEffect, useState} from "react";
import Link from 'next/link';
import {UserContext} from '../context/index';
import {useRouter} from "next/router";
import React from 'react';


function Nav () {
  const [state, setState] = useContext(UserContext);
  const [currPage, setCurrPage] = useState("");
  const router = useRouter();

  useEffect(()=>{
    //Only updating if we are in client mode of nextjs
    process.browser && setCurrPage(window.location.pathname); 
    console.log("state on reload:",state);
  }, [process.browser && window.location.pathname]);

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null); //resetting user information
    // console.log(state);
    router.push("/login");
    
  }

  return (
  <nav className="nav bg-dark d-flex justify-content-left p-3">  
      <Link href = "/" >
        <a className ={`nav-link text-light ${currPage === "/" && "active"}`}>Home</a>
      </Link>
     
      

      {state ? (
        <>
          <div className="dropdown">
            <button className="btn dropdown-toggle text-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              {state != null && state.user.first_name}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link href = "/user/profile" >
                  <a className = {`nav-link dropdown-item  ${currPage === "/user/profile" && "active"}`}>Profile</a>
                </Link>    
              </li>
              
               <li>
                <Link href = "/user/updateProfile/update" >
                  <a className = {`nav-link dropdown-item  ${currPage === "/user/profileUpdate/update" && "active"}`}>Update Profile</a>
                </Link>    
              </li>
              <li><a onClick = {logout} className = "dropdown-item nav-link"> Logout </a></li>
            </ul>
          </div>
        </>
      )
      :
      (
      <>
        <Link href = "/login" >
          <a className ={`nav-link text-light ${currPage === "/login" && "active"}`}>Login</a>
        </Link>    
        <Link href = "/register" >
          <a className ={`nav-link text-light ${currPage === "/register" && "active"}`} style = {{borderRadius: '10px'}}>Register</a>
        </Link>
      </>
      )}
      
  </nav>

  )
}
export default Nav;