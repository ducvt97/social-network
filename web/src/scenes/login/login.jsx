import React, { useState } from 'react';
import './login.css';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        window.location.href = 'http://localhost:3000/home';
    }

    return (
        <div className="login-container">
            <div className="text-5xl sm:text-6xl text-indigo-400 mb-3">Social Network</div>
            <form className="w-full" onSubmit={login}>
                <span className="p-float-label">
                    <InputText className="w-full" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="username">Username</label>
                </span>
                <span className="p-float-label">
                    <Password id="password" className="w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="password">Password</label>
                </span>
                <Button label="Login" className="w-full mt-5" type="submit" />
            </form>
        </div>
    )
}

export default Login;