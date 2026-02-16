import Razorpay from "razorpay";
import crypto from "crypto";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const createOrder = async (req, res) => {
    try {
        const { amount, currency, receipt, notes } = req.body;
        if (!amount || !currency || !receipt || !notes) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const options = {
            amount: amount * 100, // Razorpay expects amount in paise
            currency: currency,
            receipt: receipt,
            notes: notes,
        };

        const razorpayOrder = await razorpay.orders.create(options);

        if (!razorpayOrder) {
            return res.status(500).json({
                success: false,
                message: "Failed to create Razorpay order",
            });
        }




        return res.status(200).json({
            success: true,
            message: "Order created successfully",
            order: razorpayOrder,
        });
    } catch (error) {
        console.error("Error creating order:", error);
        return res.status(400).json({
            success: false,
            message: "Unable to process your request. Please try again later.",
            error: error.message
        });
    }
};


export const verifyPayment = async (req, res) => {
    try {
        const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

        const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpayOrderId}|${razorpayPaymentId}`)
            .digest("hex");

        if (expectedSignature !== razorpaySignature) {
            return res.status(400).json({
                success: false,
                message: "Invalid payment signature",
            });
        }


        return res.status(200).json({
            success: true,
            message: "Payment verified successfully",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });
    } catch (error) {
        console.error("Error creating order:", error);
        return res.status(400).json({
            success: false,
            message: "Unable to process your request. Please try again later.",
            error: error.message
        });
    }
};



export const createSubscription = async (req, res) => {
    try {
        const { user, applicationId } = req.body;
        const subscription = await razorpay.subscriptions.create({
            plan_id: process.env.RAZORPAY_PLAN_ID,
            customer_notify: 1,
            start_at: Math.floor(Date.now() / 1000),
            total_count: 1,
            notes: {
                userId: user._id.toString(),
                applicationId: applicationId,
                feature: "loan_priority_processing",
                planType: "premium170"
            }
        })
        return res.status(200).json({
            success: true,
            message: "Subscription created successfully",
            subscription: subscription,
        });

    } catch (error) {
        console.error("Error creating Subscription:", error);
        return res.status(400).json({
            success: false,
            message: "Unable to process your request. Please try again later.",
            error: error.message
        });
    }
};


export const verifySubscription = (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_subscription_id, razorpay_signature } = req.body;

        const expectedSignature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_payment_id} | ${razorpay_subscription_id}`)
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {

            return res.status(400).json({
                success: false,
                message: "Invalid payment signature",
            });
        }

        //acitvate prmium user 

        return res.status(200).json({
            success: true,
            message: "subscription verified successfully",
            subscriptionId: razorpay_subscription_id,
            paymentId: razorpay_payment_id,
        });
    } catch (error) {
        console.error("Error creating order:", error);
        return res.status(400).json({
            success: false,
            message: "Unable to process your request. Please try again later.",
            error: error.message
        });
    }
}


// env
// RECAPTCHA_SECRET_KEY=6LfIlBUsAAAAAC4o1WZ7xVlSh3_tuesvyI_PzvPc
// RAZORPAY_KEY_ID=rzp_live_SCxhZxfOfthtyz
// RAZORPAY_KEY_SECRET=73CrFfsTSex8f9cl54w80out
// RAZORPAY_PLAN_ID=plan_SGKPby1iRcu1Kq

