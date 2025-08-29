import dotenv from 'dotenv';
dotenv.config({ path: "../../.env" })

import User from '../models/user.js';
import Alert from '../models/alert.js'
import connectDB from './db.js';

async function run() {
    await connectDB();
    await User.init();
    await Alert.init();
    console.log("Indexes Created");

}

run().catch(err => {
    console.error(err)
});