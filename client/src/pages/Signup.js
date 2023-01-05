import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Signup = () => {
    const history = useNavigate();
    const [user, setUser] = useState({
        email: "", phone: "", password: ""
    });
    let name, value;
    const handleInputs = (e) => {

        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    const PostDta = async function (e) {
        e.preventDefault();
        const { email, phone, password } = user;
        const res1 = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, phone, password
            })
        });
        const data = await res1.json();
        if (res1.status === 422 || !data) {
            window.alert("INVALID REGISTRAION");
        }
        else {
            window.alert("Sucessfull REGISTRAION");
            history("/login");
        }
    }

    return (
        <>
            <form method="POST" className="registerdata">
                <div className="page">
                    <div className="main-box">
                        <h1>SignUp</h1>
                        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleInputs} required/>
                        <input type="tel" minLength={10} maxLength={10} name="phone" placeholder="phone" value={user.phone} onChange={handleInputs} required />
                        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleInputs} required/>
                        <input type="submit" name="signup" placeholder="SUBMIT" className="login-btn" value="register" onClick={PostDta} />
                        <div className="new-sign">
                            <p className="text">Already have an acoount?</p>
                            <NavLink className="loginlink" to="/login">Login</NavLink>
                        </div>

                    </div>
                </div>
            </form>
        </>
    );
};

export default Signup;