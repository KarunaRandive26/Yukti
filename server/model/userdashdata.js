const mongoose = require('mongoose');
const dash_schema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    Full_name: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    Nationality: {
        type: String,
        required: true
    },
    Languauge: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    }
});
const userdata = mongoose.model('userpersonalinfos', dash_schema);
module.exports = userdata;