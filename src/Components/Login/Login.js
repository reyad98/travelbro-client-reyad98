import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/usefirebase';
import './Login.css'
const Login = () => {
    const {signInusingGoogle} = useFirebase();
    return (
        <div>
            <div className="login-form text-white">
            <h2>Login</h2>
             <form onSubmit="">
             <input className="email" type="email" name="" id="" placeholder="Your Eamil" />
             <br />
             <input className="password" type="password" name="" id="" placeholder="Password" />
             <br />
             <input className="submit" type="submit" value="Submit" />
             </form>
             
             <div className="text-white">
                 Google sign in
             </div>
             <button 
             onClick={signInusingGoogle}
             className="google-btn ">Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;