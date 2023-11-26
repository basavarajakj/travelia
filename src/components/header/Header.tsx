import  Image  from "next/image";
import Link from "next/link";
import { X, Menu } from 'lucide-react';

import "./header.css";


const Header = () => {
  return ( 
    <header className="header">
      <div className="container">

        <Link href="/" className="logo"> 
          <Image
            src="/images/logo.svg"
            width={187}
            height={38}
            alt="Logo"
          />
        </Link>

        <nav className="navbar active">

          <div className="navbar-top">
            <Link href="/" className="logo"> 
              <Image
                src="/images/logo.svg"
                width={187}
                height={38}
                alt="Logo"
              />
            </Link>

            <button className="nav-toggle-btn" aria-label="close menu">
              <X />
            </button>
          </div>

          <ul className="navbar-list">

            <li className="navbar-item">
              <Link href="#" className="navbar-link active">Home</Link>
            </li>
            <li className="navbar-item">
              <Link href="#" className="navbar-link">About</Link>
            </li>
            <li className="navbar-item">
              <Link href="#" className="navbar-link">Services</Link>
            </li>
            <li className="navbar-item">
              <Link href="#" className="navbar-link">Pricing</Link>
            </li>
            <li className="navbar-item">
              <Link href="#" className="navbar-link">Contact</Link>
            </li>

          </ul>

          <div className="header-action">
            <button className="login-btn">Login</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>

        </nav>

        <button className="nav-toggle-btn" aria-label="open menu">
          <Menu size={27}/>
        </button>

        <div className="overlay" aria-hidden="true" ></div>

      </div>
    </header>
   );
}
 
export default Header;
