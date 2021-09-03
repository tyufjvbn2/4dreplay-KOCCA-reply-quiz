// import Mongoose from "mongoose";
// import { config } from "../../config/config";

// const db = Mongoose.createConnection("mongodb://localhost:27017/kocca_dev");
const Replys = require("../../models/collections/reply");

// const Reply = db.model("Reply", replySchema);

// import Report from "models/collections/report";

export const root = {
  test: () => "Query is working well!",
  replyAll: async () => {
    const result = await Replys.find();
    console.log("data", result);
    return result;
  },
  replyOne: () => {
    // const one = Report.findAll();
    // return one;
  },
};
