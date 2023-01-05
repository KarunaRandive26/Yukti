import React from "react";
import { NavLink } from "react-router-dom";

const AboutCard = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-body" style={{
                    backgroundImage: `url(${props.imgsrc})`, backgroundSize:'cover'
                }}>
                    <NavLink to={props.target} className="titlename">{props.title}</NavLink>
                </div>
            </div>
        </>
    );
};

export default AboutCard;

