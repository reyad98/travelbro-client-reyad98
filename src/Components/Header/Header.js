import React from 'react';
import { NavLink } from 'react-bootstrap';

import useFirebase from '../../hooks/usefirebase';
import './Header.css'

const Header = () => {
     const {user,logOut} = useFirebase();
    return (
        <div>
           <div className="header">
            <nav>
                <a href="/home">Home</a>
                {/* <a href="/services">Services</a> */}
                {/* <a href="/myorders">My Orders</a> */}
                <a href="/myhistory">My Orders History</a>
                <a href="/manage-all-orders">Manage All Orders</a>
                <a href="/addservice">Add Service</a>
                

                <span style={{color:'white'}} >{user.displayName}</span>
               {
                   user.email ?
                   
                   <button className="logout" onClick={logOut}>Log out</button>
                   :
                      
                      <a href="/login">Login</a>
                   // <NavLink to="/login">Login</NavLink>
               }

            </nav>
        </div>
        </div>
    );
};

export default Header;