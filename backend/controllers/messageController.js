const Message = require("../models/messageModel");
// const { emailBuilder } = require("../nodemailer");
const {
  createFactory,
  getFactory,
  getFactoryById,
  updateFactoryById,
  deleteFactoryById,
  checkInput,
  searchFactoryByParams,
} = require("../utils/crudFactory");

//handlers
const getMessage = getFactory(Message);
const createMessage = createFactory(Message);
const getMesssgeById = getFactoryById(Message);
const updateMessageById = updateFactoryById(Message);
const deleteMessageById = deleteFactoryById(Message);
const searchMessagerByParams = searchFactoryByParams(Message);

const otpGenerator = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const forgetPassword = async (req, res) => {
  //user sends their email
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    console.log("user ", user);
    //verify that email exists in database
    if (!user) {
      res.status(404).json({
        status: "fail!",
        message: "User not found",
      });
    } else {
      //generate a token
      const token = otpGenerator();
      user.token = token.toString();
      user.otpExpiry = new Date(Date.now() + 1000 * 60 * 5);
      await user.save();
      //send email with link to reset password
      emailBuilder(user.email, "Reset Password", `Your OTP is ${token}`)
        .then(() => {
          console.log("Reset email is sent successfully");
        })
        .catch((err) => {
          console.log("Error in sending email", err);
        });
      res.status(200).json({
        status: "success",
        message: "OTP is sent to your email",
      });
    }
  } catch (error) {
    console.log("Error in forget password", error);
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};

const resetPassword = async (req, res) => {
  //user send token and the new password
  //verify that token is valid
  //update the user's password
  try {
    const { token, password, email } = req.body;
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).json({
        status: "fail",
        message: "User not found",
      });
    } else {
      if (user.token !== token) {
        res.status(401).json({
          status: "fail",
          message: "Invalid token",
        });
      } else {
        if (user.otpExpiry < Date.now()) {
          res.status(401).json({
            status: "fail",
            message: "Token expired",
          });
        } else {
          user.password = password;
          user.token = null;
          user.otpExpiry = null;
          await user.save();
          console.log("Password reset successfully!");
          res.status(200).json({
            status: "success",
            message: "Password reset successfully",
          });
        }
      }
    }
  } catch (err) {
    console.log("Error in reset password", err);
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = {
    getMessage,
    createMessage,
    getMesssgeById,
    updateMessageById,
    deleteMessageById,
    searchMessagerByParams,
    forgetPassword,
    resetPassword,
};
