const mongoose = require("mongoose");
const { MONGO_DB_URI } = require("../config");

mongoose.connect(MONGO_DB_URI);

const blogSchema = mongoose.Schema({
    title: String,
    content: String
})

const adminSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const blog = mongoose.model('blogs', blogSchema);
const admin = mongoose.model('admins', adminSchema);

module.exports = {
    blog, admin
}