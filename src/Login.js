import React from 'react'
import './Login.css';

function Login() {
    const LoginToApp = () => {};

    const register = () => {};

    return (
        <div className="Login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lr0Vks" alt="" />

            <form>
                <input placeholder="Full name (required if registering)"
                type="text" />

                <input placeholder='Profile pic URL (optional)' type="text" />

                <input placeholder='Email' type="email" />

                <input placeholder='Password' type="password" />

                <button type='submit' onClick={LoginToApp}>Sign In</button>
            </form>

            <p>
                Not a member?{" "}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
