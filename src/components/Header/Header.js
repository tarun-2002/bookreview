import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <header>
        <nav>
            <ul class="nav__links">
                <li>
                   <NavLink                        
                        exact
                        to="/"
                        className="nav--link"
                        activeClassName="active">Home</NavLink>
                        
                    <NavLink 
                      exact
                      to="/add-book"
                      className="nav--link"
                      activeClassName="active">Add</NavLink>
                    <NavLink
                    exact
                    to="/blog"
                    className="nav--link"
                    activeClassName="active">Blog</NavLink>
                    <NavLink
                    exact
                    to="/faq"
                    className="nav--link"
                    activeClassName="active">FAQ</NavLink>
        <NavLink
                    exact
                    to="/contact-us"
                    className="nav--link"
                    activeClassName="active">Contact Us</NavLink>
                                <NavLink
                    exact
                    to="/contact-us"
                    
                    ><button className="log-btn">Log In</button></NavLink>
                </li>
            </ul>

        </nav>

    </header>
    </div>
  )
}

export default Header
