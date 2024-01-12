import React, { useState } from 'react'
import axios from 'axios';

const AdminLogin = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    async function handleLogin(e){
        e.preventDefault();
        
        try{
            const response = await axios.post("http://localhost:3000/login", {username, password});
            const token = response.data.token;

            localStorage.setItem('token', token);

            setIsLoggedIn(true);

        } catch(e){
            console.error(e);
        }
    }

    return (
        <div>
            <h3>Admin Login</h3>
            <form onSubmit={handleLogin}>
                <input 
                    type="text"
                    className='login-username'
                    placeholder='Username'
                    value={username}
                    onChange={(e)=>{
                        setUsername(e.target.value)
                    }} />
                <input 
                    type="password" 
                    className='login-password' 
                    placeholder='password' 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AdminLogin