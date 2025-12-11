import mongoose, {Schema} from "mongoose";

const bookingSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    }
})

export const BookingModel = mongoose.model("Booking", bookingSchema)