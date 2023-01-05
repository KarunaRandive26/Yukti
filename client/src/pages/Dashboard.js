import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, Routes, Route } from "react-router-dom";
import DashPage from "../components/dash";
import Col from 'react-bootstrap/esm/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Userinfo from "../components/Userinfo";
const Dashboard = () => {
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
            <Tab.Container defaultActiveKey="first">
                <Row>
                    <Col>
                        <Nav className="flex-column">
                            <Nav.Item className="event mx-auto">
                                <Nav.Link eventKey="first">Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="event mx-auto ">
                                <Nav.Link eventKey="second">Sales</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="event mx-auto ">
                                <Nav.Link eventKey="second">Sales</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="event mx-auto ">
                                <Nav.Link eventKey="second">Sales</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="event mx-auto ">
                                <Nav.Link eventKey="second">Sales</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="event mx-auto ">
                                <Nav.Link eventKey="second">Sales</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <DashPage />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <DashPage />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );

};

export default Dashboard;