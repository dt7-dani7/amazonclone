import React, { useState } from 'react';
import './Login.css';
import {Link, useHistory} from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history =useHistory();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    
    const signIn= e=>{
        e.preventDefault();
        
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register= e =>{
        e.preventDefault();
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            //it is sucessfull
            console.log(auth);
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to= '/'>
            <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/6/62/Amazon.com-Logo.svg" alt=""/>
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' onClick={signIn} className="login_signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Danish's amazon clone conditions of Use & Safe
. Please see our Privacy Notice which is not there.                </p>
                <button onClick={register} className="login_registerButton"> Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
