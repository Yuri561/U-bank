

const {createPool} = require('mysql');

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users_schema'
})

pool.query(`SELECT * FROM users_schema.employee`, (err, result)=> {
    if (err) {
        console.log(err);
    }
    console.log(result);
})

