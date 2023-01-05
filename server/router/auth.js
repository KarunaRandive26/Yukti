const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authenticate = require("../middelware/authenticate");
require('../database/connection');
const user = require("../model/userSchema");
const products = require("../model/productSchema");
const userdata = require("../model/userdashdata");
const { findOne } = require('../model/userSchema');
const { updateOne } = require('../model/userdashdata');
router.get('/', (req, res) => {
    res.send('router');
});

//register

router.post('/register', async (req, res) => {
    const { email, phone, password } = req.body;
    if (!email || !phone || !password) {
        return res.status(422).json({ error: "ERROR" });
    }
    try {
        const userExist = await user.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ messgae: "alerady exist" });
        }
        const User = new user({ email, phone, password });
        await User.save();
        const dada = {
            "user_id": User._id,
            "email": User.email,
            "phone": User.phone,
            "username": 'Edit To Update Username',
            "Full_name": 'Edit To Update Full_name',
            "date_of_birth": 'Edit To Update date_of_birth',
            "address": 'Edit To Update address',
            "gender": 'Edit To Update gender',
            "Nationality": 'Edit To Update Nationality',
            "Languauge": 'Edit To Update Languauge',
            "City": 'Edit To Update City',
            "State": 'Edit To Update State',
        }
        const Userdata1 = new userdata(dada);
        await Userdata1.save();
        res.status(201).json({ message: "sucessfully register" });
    }
    catch (err) {
        console.log(err);
    }
});

//sign

router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "Fill field properly" });
        }
        const userlogindata = await user.findOne({ email: email });

        //match pswword
        if (userlogindata) {
            const ismatch = await bcrypt.compare(password, userlogindata.password);

            token = await userlogindata.generateAuthToken();
            res.cookie("JWT_token", token, {
                expires: new Date(Date.now() + 2589200000),
                httpOnly: true
            });

            if (!ismatch)
                res.status(400).json({ message: "wrong password  " });
            else {
                res.json({ message: "USER sucessfully login" });
            }
        }
        else {
            res.status(400).json({ message: " no email found please register " });
        }
    }
    catch (err) {
        console.log(err);
    }
});

router.get('/about', authenticate, async (req, res) => {
    res.send(req.rootuserdata);
});

router.get('/logout', (req, res) => {
    console.log('user logout ho haya');
    res.clearCookie('JWT_token', { path: '/' })
    res.status(200).send('user logout');
});

router.post('/products', async (req, res) => {
    //const { name, description, price, category,revenue,images,links,userId } = req.body;
    try {
        const product = await products.create(req.body);
        await product.save();
        res.status(201).json({ message: "success" });
    }
    catch (err) {
        console.log(err);
    }
})
router.post('/update', async (req, res) => {
    if (req.body.username) {
        const update = await userdata.updateOne({ user_id: req.body.userData.user_id }, { $set: { username: req.body.username } })
    }
    if (req.body.State) {
        const update = await userdata.updateOne({ user_id: req.body.userData.user_id }, { $set: { State: req.body.State, } })
    }
    if (req.body.address) {
        const update = await userdata.updateOne({ user_id: req.body.userData.user_id }, { $set: { address: req.body.address, } })
    }
    if (req.body.date_of_birth) {
        const update = await userdata.updateOne({ user_id: req.body.userData.user_id }, { $set: { date_of_birth: req.body.date_of_birth, } })
    }
    if (req.body.Full_name) {
        const update = await userdata.updateOne({ user_id: req.body.userData.user_id }, { $set: { Full_name: req.body.Full_name, } })
    }
    if (req.body.gender) {
        const update = await userdata.updateOne({ user_id: req.body.userData.user_id }, { $set: { gender: req.body.gender, } })
    }
    if (req.body.Nationality) {
        const update = await userdata.updateOne({ user_id: req.body.userData.user_id }, { $set: { Nationality: req.body.Nationality, } })
    }
    if (req.body.Languauge) {
        const update = await userdata.updateOne({ user_id: req.body.userData.user_id }, { $set: { Languauge: req.body.Languauge, } })
    }
    if (req.body.City) {
        const update = await userdata.updateOne({ user_id: req.body.userData.user_id }, { $set: { City: req.body.City, } })
    }
    //const { name, description, price, category,revenue,images,links,userId } = req.body;
    res.status(201).json({ message: "success" });
})



module.exports = router;