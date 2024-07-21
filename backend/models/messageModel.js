const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  // confirmPassword: {
  //   type: String,
  //   required: true,
  //   minLength: 8,
  //   validate: function () {
  //     return this.password === this.confirmPassword;
  //   },
  //   message: "Password and confirmed password should be same",
  // },
//   address: {
//     type: String,
//     required: true,
//   },
//   token: String,
//   otpExpiry: Date,
});

// /** pre hooks */
// userSchema.pre("save",function(){
//   this.confirmPassword = undefined;
// })

//Message model creation
const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
