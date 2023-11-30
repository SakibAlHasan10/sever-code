const stripe = require("stripe")(process.env.stripe_secret_key);
require("dotenv").config();

const PaymentApi = async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price * 100);
//   console.log(amount);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = PaymentApi;
