const express = require("express");
const messageRouter = express.Router();

const {
  getMessage,
  createMessage,
  getMesssgeById,
  updateMessageById,
  deleteMessageById,
  searchMessagerByParams,
  forgetPassword,
  resetPassword,
} = require("../controllers/messageController");

messageRouter.get("/", searchMessagerByParams);
messageRouter.get("/", getMessage);
messageRouter.post("/", createMessage);
messageRouter.get("/:id", getMesssgeById);
messageRouter.patch("/:id", updateMessageById);
messageRouter.delete("/:id", deleteMessageById);
messageRouter.post("/forgetPassword", forgetPassword);
messageRouter.patch("/resetPassword/:userId", resetPassword);

module.exports = messageRouter;
