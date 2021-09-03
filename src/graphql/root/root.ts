const Replys = require("../../models/collections/reply");

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
