const User = require('../models/users.model');

exports.registerUser = (req, res) => {
    const {name, email, password} = req.body;
    if(!req.body){
        res.status(400).json({msg: 'All fields are compulsory'})
    }

    const user = new User({
        name: name,
        email: email,
        password: password
    });

    User.createUser(user, (err, data) => {
        if (err) {
            res.status(500).json({msg: err.message || 'Kitten Server Failure...Meeeooowww!!!'})
        }
        res.status(201).json({msg: 'User Created', data: data});
    });
}

exports.loginUser = (req, res) => {
    const {email, password} = req.body;
    if(!req.body){
        res.status(400).json({msg: 'All fields are compulsory'})
    }
    User.login(email, password, (err, data) => {
        if (err) {
            res.status(500).json({msg: err.message || 'Kitten Server Failure...Meeeooowww!!!'})
        }
        res.status(200).json({msg: 'Good to go'});
    })
}

exports.logOutUser = (req, res) => {
    //todo Add Password Hashing and Full Authentication Feature
}