// import { Aggregate } from "mongoose";
// const ObjectId = require("mongoose").Types.ObjectId;

// import { ObjectId } from "mongoose";

const Reply = require("../../models/collections/reply");
const Report = require("../../models/collections/report");

export const resolver = {
  test: () => {
    return "Query is working well!";
  },
  replyAll: async () => {
    const result = await Reply.find();
    console.log("data", result);
    return result;
  },
  replyByVod: async (vod_id: string) => {
    // const compare = { vod_id: new ObjectId(vod_id) };
    const byVod = await Reply.find({ vod_id: vod_id }).exec();
    console.log("byVod", byVod);
    return byVod;
  },
  // countTotalReply: async () => {
  //   const count = await Reply.count();
  //   console.log("how many", count);
  //   return count;
  // },
  // replyValid: async () => {
  //   const valid = await Reply.aggregate([

  //   ])
  //   return
  //  }  ,
  replyOne: async (/*obj, arg, context, info*/) => {
    // const one = await Replys.find({
    //   arg.
    // });
    // return one;
  },
  reportAll: async () => {
    return await Report.find();
  },
  reportOne: async () => {},
};
