import React, { useState, useContext,useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Usercontext } from "../App";
import Userinfo from "./Userinfo";

const DashPage = () => {
  const [userData, setUserData] = useState({});
  const history = useNavigate();
  const callAboutpage = async (e) => {
      try {
          const res = await fetch('/about', {
              method: "GET",
              headers: {
                  Accept: "appllication/json",
                  "Content-Type": "application/json"
              },
              credentials: "include",

          });
          const data = await res.json();
          setUserData(data);
          if (!res.status === 200) {
              throw new Error(res.err);
          }
      }
      catch (err) {
          console.log(err);
          history("/login");
      }
  }
  useEffect(() => {
      callAboutpage();
  }, []);
    return (
      <>
        <div className="profile-template">
          <div className="pro-line">Profile</div>
          <div className="page-1">
          <div className="user-profile">
            <div className="profile-photo me-auto">
              <div className="prof profile-pic"></div>
              <div className="prof profile-info">
                <div className="Pro-name">Jenny Anderson</div>
                <div className="Pro-mail">{userData.email}</div>
              </div>
            </div>
          </div>
          <Userinfo/>
        </div>
        </div>
      </>
    
    );
  };

  export default DashPage;