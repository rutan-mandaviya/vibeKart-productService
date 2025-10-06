require('dotenv').config();
const { connect } = require('./src/broker/broker');
const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();
connect();

const PORT = process.env.PORT || 3001; // Render pe process.env.PORT use kare
app.listen(PORT, () => {
    console.log(`listening on port ${PORT} `);
});
