//schema for alerts
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const alertSchema = new Schema({
    creatorUserId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    coords: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], default: [0, 0], required: true }
    },
    radius: {
        type: Number,
        default: 1000
    },
    status: {
        type: String,
        enum: ["active", "cancelled", "resolved"],
        default: "active"
    },
    responders: [
        {
            userId: {
                type: Schema.Types.ObjectId,
                ref: "User"
            },
            acceptedAt: Date
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    }
});

alertSchema.index({ 'coords': '2dsphere' });

export default mongoose.model("Alert", alertSchema);