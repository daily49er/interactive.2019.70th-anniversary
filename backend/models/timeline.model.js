const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const timelineSchema = new Schema({
    event: {type: String, required: true},
    date: {type: Date, required: true},
    description: {type: String, required: true},
    picture: {type: String},
    video: {type: String},
    article: {type: String},
}, {
        timestamps: true,
});

const Timeline = mongoose.model('Timeline', timelineSchema);

module.exports = Timeline;