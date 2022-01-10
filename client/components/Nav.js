import Link from 'next/link';

const Nav = () => {
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
  </nav>

  )
}
export default Nav