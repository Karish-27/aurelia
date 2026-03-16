const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Guest name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            trim: true,
            default: "",
        },
        guests: {
            type: String,
            required: [true, "Number of guests is required"],
        },
        checkin: {
            type: Date,
            required: [true, "Check-in date is required"],
        },
        checkout: {
            type: Date,
            required: [true, "Check-out date is required"],
        },
        room: {
            type: String,
            required: [true, "Room preference is required"],
            enum: ["The Aurelia Suite", "The Cliffside Villa", "The Penthouse"],
        },
        requests: {
            type: String,
            trim: true,
            default: "",
        },
        status: {
            type: String,
            enum: ["pending", "confirmed", "cancelled"],
            default: "pending",
        },
        confirmationId: {
            type: String,
            unique: true,
        },
    },
    { timestamps: true }
);

// Generate a confirmation ID before saving
reservationSchema.pre("save", function (next) {
    if (!this.confirmationId) {
        const datePart = Date.now().toString(36).toUpperCase();
        const randPart = Math.random().toString(36).substring(2, 6).toUpperCase();
        this.confirmationId = `AUR-${datePart}-${randPart}`;
    }
    next();
});

module.exports = mongoose.model("Reservation", reservationSchema);
