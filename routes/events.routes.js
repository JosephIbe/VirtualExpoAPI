const express = require('express');
const router = express.Router();

const events = require('../controllers/events.controller');

router.get('/', events.getAllEvents);
router.post('/', events.createEvent);
router.get('/:eventID', events.getOneEvent);
router.get('/:eventID/get-stalls', events.getStallsInEvent);
// router.get('/expiry/:eventID', events.checkEventExpired);

module.exports = router;