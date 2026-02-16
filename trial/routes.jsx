const express = require("express");
const router = express.Router();
const { createOrder, verifyPayment, createSubscription, verifySubscription } = require("../../controllers/user/razorpay");

// Log bot attempt (public endpoint - already triggered by honeypot)
router.post("/create-order", createOrder);

router.post("/verify-payment", verifyPayment);

router.post('/create-subscription', createSubscription)


router.post('/verify-subscriptions', verifySubscription)
// Get bot statistics (should be protected by admin auth in production)
// router.get("/stats", adminAuth, getBotStats);

module.exports = router;
