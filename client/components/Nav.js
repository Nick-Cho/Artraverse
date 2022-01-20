import {useContext} from "react";
import Link from 'next/link';
import {UserContext} from '../context/index';
import {useRouter} from "next/router";
const Nav = () => {
  const [state, setState] = useContext(UserContext);
  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null); //resetting user information
    router.push("/login");
  }

  return (
  <nav className="nav bg-dark d-flex justify-content-left p-3">  
      <Link href = "/" >
        <a className ="nav-link text-light">Home</a>
      </Link>
      <Link href = "/login" >
        <a className ="nav-link text-light">Login</a>
      </Link>    
      <Link href = "/register" >
        <a className ="nav-link text-light btn-primary " style = {{borderRadius: '10px'}}>Register</a>
      </Link>

      <a onClick = {logout} className = "nav-link text-light"> Logout </a>
  </nav>

  )
}
export default Nav