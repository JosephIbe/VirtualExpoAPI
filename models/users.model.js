const sql = require('./db');

const User = function(user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
}

User.createUser = (newUser, result) => {
    sql.query(`insert into users set ?`, newUser, (err, res) => {
        if(err){
            console.log(err);
            result(err, null);
            return;
        }
        console.log('new user created', {id: res.insertId, ...newUser} );
        result(null, {id: res.insertId, ...newUser});
    })
}

User.login = (email, password, result) => {
    let statement = `select email, password from users where email = ${email} and password = ${password} `;
    sql.query(statement, (err, res) => {
       if(err){
           console.log(err);
           result(err, null);
           return;
       } else {
           console.log('user found', JSON.stringify(res[0]));
           result(null, JSON.stringify(res[0]));
       }
    })
}

module.exports = User;