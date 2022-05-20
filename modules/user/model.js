const mongoose = require('mongoose');

const user = {
    name: String
}

const userSchema = new mongoose.Schema(user, { versionKey: false, timestamps: true });

module.exports = {
    UserModel: mongoose.model("user", userSchema)
};
