const router = require('express').Router();
let Timeline = require('../models/staff.model')

// First endpoint, handles GET request
router.route('/').get((req, res) => {
    // get list of all staff, returns a promise in JSON format 
    Timeline.find()
    .then(timeline => res.json())
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST request
router.route('/add').post((req, res) => {
    const event = req.body.event;
    const date = Date.parse(req.body.date); // convert to Date datatype
    const description = req.body.description;
    const picture = req.body.picture;
    const video = req.body.video;
    const article = req.body.article;
    const newStaff = new Staff({
        event,
        date,
        description,
        picture,
        video,
        article,
    });

    newStaff.save()
    .then(() => res.json('Staff member added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Export router
module.exports = router;