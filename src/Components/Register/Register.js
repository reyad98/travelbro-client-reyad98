import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/usefirebase';
import './Register.css'
const Register = () => {
    const {signInusingGoogle} = useFirebase();
    return (
        <div>
            <div className="regi-from">
                <h2>Register</h2>
                <form  onSubmit="">
                 <input className="form" type="name" value="" placeholder="Enter Your Name" />
                 <br />
                 <input className="form" type="email" name="" id="" placeholder="Your Email" />
                 <br />
                 <input className="form" type="password" name="" id="" placeholder="Type Password" />
                 <br />
                 <input className="form" type="password" name="" id=""  placeholder="Confrim Password"/>
                 <br />
                 <input className="form-regi" type="submit" value="Register" />
                </form>
                <p>If you have a account ? <Link to="/login">Login</Link></p>
                <div>---------or---------</div>
                <button onClick={signInusingGoogle} className="google-btnn">Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;