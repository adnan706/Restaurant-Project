import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must at least 3 characters!"],
        maxLength: [30, "First name cannot exceed 30 char"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must at least 3 characters!"],
        maxLength: [30, "Last name cannot exceed 30 char"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid Email !"],
    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "Phone number must be exactly 10 number !"],
        maxLength: [10, "Phone number must cannot only 10 number !"],
    },
    time:{
        type: String,
        required:true,
    },
    date:{
        type:String,
        required:true
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);