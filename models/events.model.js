const sql = require('./db');

const Events = function (events) {
    this.name = events.name;
    this.location = events.location;
    this.date = events.date;
}

Events.create = (newEvent, result) => {
    sql.query(`insert into events set ? `, newEvent, (err, res) => {
        if(err){
            console.log(err);
            result(err, null);
            return;
        }
        console.log('new event created', {id: res.insertId, ...newEvent} );
        result(null, {id: res.insertId, ...newEvent});
    });
}

Events.getAllEvents = (result) => {
    sql.query(`select * from insert`, (err, res) => {
        if(err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log('all events\t' + res);
        result(null, res);
    });
}

Events.findEventById = (eventID, result) => {
    sql.query(`select * from events where eventid = ${eventID}`, (err, res) => {
        if(err){
            console.log(err);
            result(err, null);
            return ;
        }
        if(res.length){
            // console.log('event found:\t', res[0]);
            result(err, res[0]);
        } else {
            // event not found
            result({kind: "not found"}, null);
        }
    });
}

Events.findStallsInsideEvent = (eventID, result) => {
    sql.query(`select * from stalls where eventid = ${eventID}`, (err, res) => {
        if(err){
            console.log(err);
            result(err, null);
            return;
        }
        if(res.length){
            // console.log('event found:\t', res[0]);
            result(err, res);
        } else {
            // event not found
            result({kind: "not found"}, null);
        }
    })
}

// Events.checkExpiry = (eventID, result) => {
//     sql.query(`select location from EVENTS where eventid = ${eventID}`, (err, res) => {
//         if(err){
//             console.log(err);
//             result(err, null);
//             return ;
//         }
//         if(res.length){
//             // console.log('event found:\t', JSON.stringify(res[0]));
//             console.log(res[0]);
//             result(err, res[0]);
//             return ;
//         } else {
//             // event not found
//             result({kind: "not found"}, null);
//         }
//     })
// }

module.exports = Events;