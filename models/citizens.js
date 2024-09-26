const mongoose = require('mongoose');

const citizensSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: String,  //temporary we are taking it as string type
    adharNumber: String,
    fingerprint: String
    //fingerprint gonna add here
});

const citizensModel = mongoose.model("citizens", citizensSchema);
module.exports = citizensModel