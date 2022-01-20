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
    
  }, [process.browser && window.location.pathname]);

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null); //resetting user information
    router.push("/login");
  }

  return (
  <nav className="nav bg-dark d-flex justify-content-left p-3">  
      <Link href = "/" >
        <a className ={`nav-link text-light ${currPage === "/" && "active"}`}>Home</a>
      </Link>

      {state !== null ? (
        <>
          <Link href = "/user/profile" >
            <a className = {`nav-link text-light ${currPage === "/user/profile" && "active"}`}>Profile</a>
          </Link>    
          <a onClick = {logout} className = "nav-link text-light"> Logout </a>
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