module.exports = {
    HOST: 'us-cdbr-east-02.cleardb.com',
    USER: 'bfe98bc1a49553',
    PASSWORD: '5c42c472',
    DB: 'heroku_7efd1b56059081b',
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