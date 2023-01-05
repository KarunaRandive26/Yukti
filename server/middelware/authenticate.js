const User = require("../model/userSchema");
const userdata = require("../model/userdashdata");
const jwt = require("jsonwebtoken");
const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.JWT_token;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootuser = await User.findOne({ _id: verifyToken._id });
        const rootuserdata = await userdata.findOne({ user_id: rootuser._id });
        const rootuser1 = await User.find({
            "tokens:jwt_token": token
        });

        if (!rootuser && !rootuser1) { throw new Error("USer not FOUND"); }
        req.token = token;
        req.rootuser = rootuser;
        req.rootuserdata = rootuserdata;
        req.userId = rootuser._id;
        next();
    }
    catch (err) {
        res.status(401).send('Unauthorized no token');
        console.log(err);
    }
}
module.exports = Authenticate;