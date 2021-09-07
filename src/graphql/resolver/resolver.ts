import mongoose from "mongoose"
const Reply = require("../../models/collections/reply");
const Report = require("../../models/collections/report");

interface Params {
  vod_id: mongoose.Types.ObjectId,
  user_id: mongoose.Types.ObjectId,
  reply_text: string | undefined
}

export const resolver = {
  test: () => {
    return "Query is working well!";
  },
  replyAll: async () => {
    const result = await Reply.find();
    console.log("data", result);
    return result;
  },
  replyOne: async (_id: mongoose.Types.ObjectId) => {
    const one = await Reply.findById(_id);
    return one;
  },
  replyByVod: async (vod_id: string) => {
    const byVod = await Reply.find(vod_id);
    console.log("byVod", byVod);
    return byVod;
  },
  // countTotalReply: async () => {
  //   const count = await Reply.count();
  //   console.log("how many", count);
  //   return count;
  // },
  replyByUserId: async (user_id: string) => {
    const byUserId = await Reply.find(user_id)
    console.log("byUserId", byUserId)
    return byUserId
  },
  reportAll: async () => {
    return await Report.find();
  },
  reportOne: async (_id: mongoose.Types.ObjectId) => {
    return await Report.findById(_id)
  },
  reportByReply: async (reply_id: mongoose.Types.ObjectId) => {
    return await Report.find(reply_id)
  },



  createReply: async (obj: Params) => {
    console.log("params", obj)
    const { vod_id, user_id, reply_text } = obj
    const newOne = await Reply.create({
      vod_id: vod_id,
      user_id: user_id,
      reply_text: reply_text,
      reply_report_state: "OPEN",
      created_at: new Date(),
      updated_at: new Date()
    })
    console.log("created", newOne)
    return newOne
  }
};
