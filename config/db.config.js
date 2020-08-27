module.exports = {
    HOST: 'us-cdbr-east-02.cleardb.com',
    USER: 'b038a563b8771e',
    PASSWORD: 'c7289028',
    DB: 'heroku_a06d79786d6e259',
    // HOST: 'localhost',
    // USER: 'root',
    // PASSWORD: 'iam_darth007',
    // DB: 'virtual-expo',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
};