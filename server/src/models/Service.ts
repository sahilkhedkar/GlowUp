import mongoose, {Schema} from "mongoose";

const serviceSchema = new Schema({
    serviceName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export const ServiceModel = mongoose.model('Service', serviceSchema)