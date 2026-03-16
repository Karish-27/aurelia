const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");
const { sendConfirmationEmail, sendStaffNotification } = require("../services/emailService");

// POST /api/reservations — create a new reservation
router.post("/", async (req, res) => {
    try {
        const { name, email, phone, guests, checkin, checkout, room, requests } = req.body;

        // Basic validation
        if (!name || !email || !guests || !checkin || !checkout || !room) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        if (new Date(checkout) <= new Date(checkin)) {
            return res.status(400).json({ error: "Check-out must be after check-in" });
        }

        const reservation = new Reservation({
            name,
            email,
            phone,
            guests,
            checkin,
            checkout,
            room,
            requests,
        });

        await reservation.save();

        // Send emails (don't block the response if email fails)
        try {
            await sendConfirmationEmail(reservation);
            await sendStaffNotification(reservation);
        } catch (emailErr) {
            console.error("Email sending failed:", emailErr.message);
        }

        res.status(201).json({
            message: "Reservation created successfully",
            confirmationId: reservation.confirmationId,
            reservation: {
                id: reservation._id,
                name: reservation.name,
                email: reservation.email,
                checkin: reservation.checkin,
                checkout: reservation.checkout,
                room: reservation.room,
                guests: reservation.guests,
                status: reservation.status,
                confirmationId: reservation.confirmationId,
            },
        });
    } catch (err) {
        console.error("Reservation error:", err);
        if (err.name === "ValidationError") {
            const messages = Object.values(err.errors).map((e) => e.message);
            return res.status(400).json({ error: messages.join(", ") });
        }
        res.status(500).json({ error: "Server error. Please try again." });
    }
});

// GET /api/reservations/:confirmationId — look up a reservation
router.get("/:confirmationId", async (req, res) => {
    try {
        const reservation = await Reservation.findOne({
            confirmationId: req.params.confirmationId,
        });

        if (!reservation) {
            return res.status(404).json({ error: "Reservation not found" });
        }

        res.json({
            id: reservation._id,
            name: reservation.name,
            email: reservation.email,
            phone: reservation.phone,
            checkin: reservation.checkin,
            checkout: reservation.checkout,
            room: reservation.room,
            guests: reservation.guests,
            requests: reservation.requests,
            status: reservation.status,
            confirmationId: reservation.confirmationId,
            createdAt: reservation.createdAt,
        });
    } catch (err) {
        console.error("Lookup error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
