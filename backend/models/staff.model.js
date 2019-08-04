const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const staffSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    }, 
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    }, 
    photo: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    social: {
        linkedin: String, 
        twitter: String,
        instagram: String,
        github: String,
    }
}, {
        timestamps: true,
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;