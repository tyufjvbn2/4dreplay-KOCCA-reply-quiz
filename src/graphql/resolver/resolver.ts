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
