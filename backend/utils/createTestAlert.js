const connectDB = require("./db.js");
const Alert = require("../models/alert.js");

async function createTestAlert(){
    await connectDB();
    const alert=await Alert.create({
        creatorUserId: "649c1f1f1f1f1f1f1f1f1f1f",
        coords: {
            type: "Point",
            coordinates: [0, 0]
        },
        radius: 1000,
        status: "active",
        responders: [],
        createdAt: new Date()
    });
    console.log("alert created:",alert._id)
}

createTestAlert().catch((e)=>{
    console.error("Error creating alert:", e);
});

// const alertSchema = new Schema({
//     creatorUserId: {
//         type: Schema.Types.ObjectId,
//         ref: "User"
//     },
//     coords: {
//         type: { type: String, enum: ['Point'], default: 'Point' },
//         coordinates: { type: [Number], default: [0, 0], required: true }
//     },
//     radius: {
//         type: Number,
//         default: 1000
//     },
//     status: {
//         type: String,
//         enum: ["active", "cancelled", "resolved"],
//         default: "active"
//     },
//     responders: [
//         {
//             userId: {
//                 type: Schema.Types.ObjectId,
//                 ref: "User"
//             },
//             acceptedAt: Date
//         }
//     ],

//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });