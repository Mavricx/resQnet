const dotenv = require('dotenv');
dotenv.config({ path: "../../.env" });

const User = require('../models/user.js');
const Alert = require('../models/alert.js');
const connectDB = require('./db.js');

async function run() {
    await connectDB();
    await User.init();
    await Alert.init();
    console.log("Indexes Created");

}

run().catch(err => {
    console.error(err)
});