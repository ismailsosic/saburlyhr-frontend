import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <div className="loginForm">
                <form action="/dashboard" method="">
                    <h1>LOGIN</h1>
                    <p>Please enter your username and password!</p>
                    <div className="inputFields">
                        <label for="username">Username:</label>
                        <input name="username" type="text"/>
                        <label for="password">Password:</label>
                        <input name="password" type="password"/>
                        <input type="submit" value="Login" className="button"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login