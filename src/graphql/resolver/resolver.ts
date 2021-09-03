const Replys = require("../../models/collections/reply");

export const resolver = {
  test: () => "Query is working well!",
  replyAll: async () => {
    const result = await Replys.find();
    console.log("data", result);
    return result;
  },
  replyOne: async (/*obj, arg, context, info*/) => {
    // const one = await Replys.find({
    //   arg.
    // });
    // return one;
  },
};
