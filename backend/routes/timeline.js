const router = require('express').Router();
let Timeline = require('../models/timeline.model')

// First endpoint, handles GET request
router.route('/').get((req, res) => {
    // get list of all staff, returns a promise in JSON format 
    Timeline.find()
    .then(timeline => res.json(timeline))
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
    const newEvent = new Timeline({
        event,
        date,
        description,
        picture,
        video,
        article,
    });

    newEvent.save()
    .then(() => res.json('Event added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Timeline.findById(req.params.id)
    .then(timeline => res.json(timeline))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Timeline.findByIdAndDelete(req.params.id)
    .then(timeline => res.json('Event deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Timeline.findById(req.params.id)
    .then(timeline => {
        timeline.event = req.body.event;
        timeline.date = Date.parse(req.body.date);
        timeline.description = req.body.description;
        timeline.picture = req.body.picture;
        timeline.video = req.body.video;
        timeline.article = req.body.article; 

        timeline.save()
        .then(() => res.json('Event updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Export router
module.exports = router;