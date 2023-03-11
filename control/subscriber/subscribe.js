const subscribeModel = require("../../model/subscribe");

const SUBSCRIBER = new subscribeModel();

const newSubscriber = async (req, res) => {
  const subscriberData = new subscribeModel(req.body);
  const data = {
    email: req.body.email
  }
  const check_subscriber = await subscribeModel.findOne({email:req.body.email});
  if (!check_subscriber) {
    const response = await subscriberData.save();
    return res
      .status(201)
      .json({ message: "Thanks for subscribing...!", response: response });
  }
  return res
    .status(404)
    .json({ message: "Your Mail is already subscribed...!" });
};

const removeSubscriber = async (req, res) => {
  const response = await subscribeModel.deleteOne({ email: req.body.email });
  res.send({
    message: "You will not receive any email form us. Sad to let you go.",
    response: response,
  });
};

module.exports = { newSubscriber, removeSubscriber };

