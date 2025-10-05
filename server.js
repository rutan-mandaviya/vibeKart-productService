
require('dotenv').config();
const { connect } = require('./src/broker/broker');
const app=require('./src/app');
const connectDB = require('./src/db/db');

connectDB()
connect()
app.listen(3001,()=>{
    console.log('listening on port 3001 http://localhost:3001');
});
