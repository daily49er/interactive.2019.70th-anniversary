const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const timelineSchema = new Schema({
    event: {type: String, required: true},
    date: {type: Date, required: true},
    description: {type: String, required: true},
    img: {type: String},
    url: {type: String},
    text: {type: String},
    tags: {type: String},
    color: {type: String},
);

const Timeline = mongoose.model('Timeline', timelineSchema);

module.exports = Timeline;