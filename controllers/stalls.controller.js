const Stalls = require('../models/stalls.model');

// exports.addStall = (req, res) => {
//     const {name, price, reserved, eventid, } = req.body;
// }

exports.bookStall = (req, res) => {
    const {stallID} = req.params;
    Stalls.markStallAsBooked(stallID, (err, data) => {
        if(err){
            console.log(err);
            if(err.kind === 'not_found'){
                res.status(404).json({msg: 'No such stall exists', data: null});
            } else {
                res.status(500).json({msg: 'Server unreachable', data: null});
            }
        } else {
            res.status(200).json({msg: 'Stall Booked'});
        }
    })
}