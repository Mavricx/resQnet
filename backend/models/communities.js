//schema for communities
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const communitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    members: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        joinedAt: {
            type: Date,
            default: Date.now
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Community", communitySchema);