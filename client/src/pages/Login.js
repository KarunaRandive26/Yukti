import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Usercontext } from "../App";

const Login = () => {
    const { state, dispatch } = useContext(Usercontext);
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginuser = async function (e) {
        e.preventDefault();
        const res1 = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res1.json();
        console.log(res1);
        if (res1.status === 400 || !data) {
            window.alert("INVALID REGISTRAION");
        }
        else {
            dispatch({ type: "USER", payload: true })
            window.alert("Sucessfull REGISTRAION");
            history("/");
        }
    }
    return (
        <>
            <div className="page ">
                <div className="main-box ">
                    <h1>Login</h1>
                    <input type="email" placeholder="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input type="submit" name="signup" placeholder="SUBMIT" className="login-btn" value="log in" onClick={loginuser} />

                    <div className="new-sign">
                        <p className="text">Are you a new member?</p>
                        <NavLink className="signlink" to="/signup">Sign up</NavLink>
                    </div>

                </div>
            </div>
        </>
    );
};
export default Login;