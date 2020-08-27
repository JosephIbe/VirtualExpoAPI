const Events = require('../models/events.model');

exports.createEvent = (req, res) => {
    const {name, location, date} = req.body;
    if (!req.body) {
        res.status(400).json({msg: 'All Fields are mandatory'});
    }
    const events = new Events({
        name: name,
        location: location,
        date: date
    });

    Events.create(events, (err, data) => {
        if (err) {
            res.status(500).json({msg: err.message || 'Kitten Server Failure...Meeeooowww!!!'})
        }
        res.status(201).json({msg: 'Event Created', data: data});
    });

}

exports.getAllEvents = (req, res) => {
    Events.getAllEvents((err, data) => {
        if (err) {
            console.log('error getting all events');
            console.log(err);
            res.status(500).json({msg: 'Could Not Fetch Events', data: null})
        }
        res.status(200).json({msg: 'All Events Fetched', data: data});
    });
}

exports.getOneEvent = (req, res) => {
    const {eventID} = req.params;
    console.log(`event ID:\t ${eventID}`);

    Events.findEventById(eventID, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Event with id ${eventID}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Event with id " + eventID
                });
            }
        // } else res.send(data);
        } else {

        }
    })

}

exports.getStallsInEvent = (req, res) => {
    const {eventID} = req.params;
    console.log(`event id to retriev stalls from:\t ${eventID}`);

    Events.findStallsInsideEvent(eventID, (err, data) => {
        if(!err) {
            console.log(data);
            res.status(200).json({msg: 'Event with Stalls Retrieved', data: data});
        } else {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Event with id ${eventID}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving Stalls With Event with id " + eventID
                    });
                }
                // } else res.send(data);
            }
        }
    })
}

// exports.checkEventExpired = (req, res) => {
//     const {eventId} = req.params;
//     console.log(`event Id:\t ${eventId}`);
//
//     Events.checkExpiry(eventID, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found Event with id ${eventId}.`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Error retrieving Event with id " + eventId
//                 });
//             }
//         }
//         else {
//             let object = JSON.parse(data);
//             console.log(object.date);
//             // res.status(200).json({msg: 'Event Retrieved', data: data});
//         }
//     });
// }