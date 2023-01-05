import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Userinfo = () => {
    const [userData, setUserData] = useState({});
    const [username, setusername] = useState(null);
    const [address, setaddress] = useState(null);
    const [date_of_birth, setdate_of_birth] = useState(null);
    const [Full_name, setFull_name] = useState(null);
    const [gender, setgender] = useState(null);
    const [Nationality, setNationality] = useState(null);
    const [Languauge, setLanguauge] = useState(null);
    const [City, setCity] = useState(null);
    const [State, setState] = useState(null);
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
            console.log(data);
            if (!res.status === 200) {
                throw new Error(res.err);
            }
        }
        catch (err) {
            console.log(err);
            history("/login");
        }
    }
    const savadata = async function (e) {
        e.preventDefault();
        const res1 = await fetch("/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, address, date_of_birth, Full_name, gender, Nationality, Languauge, City, State, userData
            })
        });
        history("/dashboard");
        const data = await res1.json();
        if (res1.status === 400 || !data) {
            window.alert("INVALID REGISTRAION");
        }
        else {
            window.alert("Sucessfull REGISTRAION");
            history("/dashboard");
        }
    }

    useEffect(() => {
        callAboutpage();
    }, []);
    const savedata = () => {
        history("/login");

    }
    return (
        <>
            <div class="row profilecard">
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Username</div>
                        <div className="data">{userData.username}</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Full_name</div>
                        <div className="data">{userData.Full_name}</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Email</div>
                        <div className="data">{userData.email}</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Phone</div>
                        <div className="data">{userData.phone}</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Gender</div>
                        <div className="data">{userData.gender}</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Nationality</div>
                        <div className="data">{userData.Nationality}</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Languauge</div>
                        <div className="data">{userData.Languauge}</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">City</div>
                        <div className="data">{userData.City}</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">State</div>
                        <div className="data">{userData.State}</div>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-6 fieldcard">
                    <div className="item">
                        <div className="field">Date_of_birth</div>
                        <div className="data">{userData.date_of_birth}</div>
                    </div>
                </div>
            </div>
            <div className="me-auto"><div className="edit btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form class="row g-3">
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Username</label>
                                        <input type="text" class="form-control" id="inputEmail4" value={username} onChange={(e) => setusername(e.target.value)} />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="text" class="form-label">Full_name</label>
                                        <input type="text" class="form-control" id="inputPassword4" value={Full_name} onChange={(e) => setFull_name(e.target.value)} />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="text" class="form-label">address</label>
                                        <input type="text" class="form-control" id="inputPassword4" value={address} onChange={(e) => setaddress(e.target.value)} />
                                    </div>
                                    <div class="col-12">
                                        <label for="inputLanguage" class="form-label">Languauge</label>
                                        <input type="text" class="form-control" id="inputLanguage" value={Languauge} onChange={(e) => setLanguauge(e.target.value)} />
                                    </div>
                                    <div class="col-12">
                                        <label for="inputPhone" class="form-label">Date_of_birth</label>
                                        <input type="text" maxlength="10" class="form-control" id="inputPhone" placeholder="Date_of_birth" value={date_of_birth} onChange={(e) => setdate_of_birth(e.target.value)} />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputGender" class="form-label">Gender</label>
                                        <input type="text" maxlength="10" class="form-control" id="inputGender" placeholder="Date_of_birth" value={gender} onChange={(e) => setgender(e.target.value)} />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputNation" class="form-label">Nationality</label>
                                        <input type="text" maxlength="10" class="form-control" id="inputNation" placeholder="Date_of_birth" value={Nationality} onChange={(e) => setNationality(e.target.value)} />

                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputCity" class="form-label">City</label>
                                        <input type="text" class="form-control" id="inputCity" value={City} onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputState" class="form-label">State</label>
                                        <input type="text" maxlength="10" class="form-control" id="inputState" placeholder="Date_of_birth" value={State} onChange={(e) => setState(e.target.value)} />
                                    </div>

                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <input type="submit" name="edit" placeholder="SUBMIT" className="Edit-btn" onClick={savadata} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Userinfo;
