import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Header() {
  let initlogin;
  if (localStorage.getItem("login") == null) {
    initlogin = [];
  }
  else {
    initlogin = localStorage.getItem("login");
  }
  const [login] = useState(initlogin);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">TechM Kart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <form className=" d-flex col form-inline ">
              <input className="form-control me-3 w-60 " type="search" placeholder="Search for products,brands and more" />
              <button className="btn btn-outline-success" type="submit">Search </button>
            </form>
            <ul className="navbar-nav ">
              {
                login.length==0 || login=="[]"?
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                  </>
                  :
                  <>
                  <li className="nav-item">
                      <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                  </>
              }
              <li className="nav-item">
                <Link className="nav-link" to="/viewcart">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
    
  )
}

export default Header