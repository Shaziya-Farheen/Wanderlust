import express from "express";
import send_reservation from "../controller/reservation.js";
import send_review from "../controller/reviews.js";
import host_site from "../controller/Host.js";

const router = express.Router();
router.post("/send", send_reservation);
router.post("/feedback", send_review);
router.post("/host", host_site);


export default router;