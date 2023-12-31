import { mongooseConnect } from "@/lib/mongoose";
import { buffer } from 'micro';
import { Order } from "@/models/Order";

const stripe = require('stripe')(process.env.STRIPE_SECRET);

const endpointSecret = "whsec_92fcfd574f539b175018e7d64bf05e84bb7afe14ef6ce067cdb9a9dca3448b27";

export default async function handler(req,res) {
    
    await mongooseConnect();

    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const data = event.data.object;
            const orderId = data.metadata.orderId;
            const paid = data.payment_status === 'paid';
            if (orderId && paid) {
                await Order.findByIdAndUpdate(orderId,{
                    paid:true,
                })
            }
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
  
    res.status(200).send('ok');
};

export const config = {
    api: { 
        bodyParser: false, 
    }
};