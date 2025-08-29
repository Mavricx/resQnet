
import connectDB from './db.js';
import User from "../models/user.js"


async function run() {
    await connectDB();
    const user = await User.create({
        email: "testuser@example.com",
        name: "Test User",
        userType: "Normal Citizen",
        username: "testuser",
        address: {
            country: "USA",
            State: "California",
            city: "Los Angeles",
            zipcode: 90001
        },
        phoneNo: 1234567890,
        profilePicture: "https://example.com/profile.jpg",
        deviceToken: [{
            token: "sample_token",
            platform: "web",
            updatedAt: Date.now()
        }],
        location: { type: "Point", coordinates: [ -118.2437, 34.0522 ] }
    })
    console.log("Test User Created:", user._id);
}

run().catch(err => {
    console.error(err);
})