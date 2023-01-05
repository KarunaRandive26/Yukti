import React, { useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Usercontext } from "../App";
const Logout = () => {
    const { state, dispatch } = useContext(Usercontext);
    const history = useNavigate();
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "include",
        }).then((res) => {
            dispatch({ type: "USER", payload: false })
            history("/login");
            if (!res.status === 200) {
                throw new Error(res.err);
            }
        }).catch((err) => {
            console.log(err);
        })
    });

};

export default Logout;