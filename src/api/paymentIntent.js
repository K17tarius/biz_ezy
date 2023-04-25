// Specify Stripe secret api key here
const stripe = require("stripe")("stripe_secret_api_key");
// Create a PaymentIntent with the order amount and currency
const paymentIntent = await stripe.paymentIntents.create({
  amount: 1200, // Specify amount here
  currency: "usd" // Specify currency here
});
// Return client secret
res.send({
  clientSecret: paymentIntent.client_secret
});