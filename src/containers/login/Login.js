import React, { useState} from 'react';
import postData from './api-service';
import './Login.css';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const [loginStatus, setLoginStatus] = useState(false);

    let credentials = {
        username: username,
        password: password
    }   


    const submitHandler = (event) => {
        event.preventDefault()
        const url = 'https://shrb2.herokuapp.com/api/token/'
        postData(url, credentials)
        .then(response => {
            localStorage.setItem('token', response.access)
            localStorage.setItem('refresh-token', response.refresh)
        })
        setTimeout(() => {
            if (localStorage.getItem('token') !== "undefined"){
                window.location.replace("http://localhost:3000/dashboard/cardlist")
            }
            else {
                window.location.replace("http://localhost:3000/")
            }
    }, 1000)
        
    }



    return (
        <div className="login" >
            <div className="loginForm">
                <form onSubmit={submitHandler}>
                    <h1>LOGIN</h1>
                    <p>Please enter your username and password!</p>
                    <div className="inputFields">
                        <label htmlFor="username">Username:</label>
                        <input id='username' className="loginInput" type="text" onChange={e=> setUsername(e.target.value)} required/>
                        <label htmlFor="password">Password:</label>
                        <input id="password" className="loginInput" type="password"  onChange={e=> setPassword(e.target.value)} required/>
                        <input type="submit" value="Login" className="loginBtn"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login