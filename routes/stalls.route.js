const expres = require('express');
const router = expres.Router();
const events = require('../controllers/events.controller');
const stalls = require('../controllers/stalls.controller');

router.put('/:stallID/book-stall', stalls.bookStall);

module.exports = router;