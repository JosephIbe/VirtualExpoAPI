const sql = require('./db');

const Stalls = (stalls) => {
    this.eventid = stalls.eventid;
    this.image = stalls.image;
    this.name = stalls.name;
    this.price = stalls.price;
    this.reserved = stalls.reserved;
    this.bookingCompanyLogo = stalls.bookingCompanyLogo;
}

/**
 *  Untested route, query ran through workbench
 * **/

Stalls.create = (newStall, result) => {
    sql.query(`insert into stalls set ?`, newStall, (err, res) => {
        if (err) {
            console.log(`error creating stall \n ${err}` );
            result(err, null);
            return;
        }
        console.log(`new stall created with id:\t ${{id: res.insertId, ...newStall}}`);
        result(null, {id: res.insertId, ...newStall});
    });
}

/***
 *  Tested Route, Works through Postman
 * **/

Stalls.showAllStalls = (result) => {
    sql.query(`select * from stalls`, (err, res) => {
        if(err) {
            console.log(err);
            result(err, null);
            return;
        }
        console.log('all stalls\t' + res);
        result(null, res);
    });
}

Stalls.markStallAsBooked = (stallID, result) => {
    sql.query(`update stalls set reserved = true where id = ${stallID}`, (err, res) => {
        if(err){
            console.log(err);
            result(err, null);
            return;
        }
        console.log('stall booked\t' + res);
        result(null, res);
    });
}

module.exports = Stalls;