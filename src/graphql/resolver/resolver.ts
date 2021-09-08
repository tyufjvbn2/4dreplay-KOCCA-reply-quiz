import mongoose from "mongoose"
const Reply = require("../../models/collections/reply");
const Report = require("../../models/collections/report");

enum ReplyState {
  OPEN = "OPEN",
  UNCHECKED = "UNCHECKED",
  CHECKED = "CHECKED",
  BLOCK = "BLOCK"
}

enum ReportState {
  UNCHECKED = "UNCHECKED",
  CHECKED = "CHECKED",
  DONE = "DONE"
}

enum ReportReason {
  BAD_NICKNAME = "BAD_NICKNAME",
  VIOLENT_TEXT = "VIOLENT_TEXT",
  SEXUAL_TEXT = '"SEXUAL_TEXT',
  AD_TEXT = "AD_TEXT",
  REPEATED = "REPEATED",
  OUTLAW = "OUTLAW",
  ETC = "ETC"
}

interface Params {
  _id?: mongoose.Types.ObjectId,
  vod_id?: mongoose.Types.ObjectId,
  user_id?: mongoose.Types.ObjectId,
  reply_id?: mongoose.Types.ObjectId,
  reply_text?: string | undefined,
  reply_report_state?: ReplyState,
  admin_check_state?: ReportState,
  report_reason?: ReportReason,
  report_text?: string
}

export const resolver = {

  //--------------//
  // Query Method //
  //--------------//

  test2: () => {
    return "This come from test2!!"
  },

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

  //-----------------//
  // Mutation Method //
  //-----------------//

  createReply: async (arg: Params) => {
    console.log("params", arg)
    const { vod_id, user_id, reply_text } = arg
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
  },

  deleteReply: async (_id: mongoose.Types.ObjectId) => {
    const target = await Reply.findOneAndDelete(_id)
    console.log("target", target)
    return target
  },

  updateReply: async (arg: Params) => {
    const { _id, reply_text } = arg
    console.log("params", _id, reply_text)
    const update = await Reply.findOneAndUpdate(
      { _id: _id },
      {
        reply_text: reply_text,
        updated_at: new Date()
      },
      { returnOriginal: false })
    console.log("update", update)
    return update
  },

  changeReplyReportState: async (arg: Params) => {
    const { _id, reply_report_state } = arg
    const adminChk = await Reply.findOneAndUpdate(
      { _id: _id },
      {
        reply_report_state: reply_report_state,
        updated_at: new Date()
      },
      { returnOriginal: false })
    console.log("adchk", adminChk)
    return adminChk
  },

  createReport: async (arg: Params) => {
    const { reply_id, user_id, report_reason, report_text } = arg
    const newReport = await Report.create({
      reply_id: reply_id,
      user_id: user_id,
      report_reason: report_reason,
      report_text: report_text,
      admin_check_state: "UNCHECKED",
      created_at: new Date(),
      updated_at: new Date()
    })
    console.log("new", newReport)
    return newReport
  },

  checkReport: async (arg: Params) => {
    const { _id, admin_check_state } = arg
    const rptChk = await Report.findOneAndUpdate(
      { _id: _id },
      {
        admin_check_state: admin_check_state,
        updated_at: new Date()
      },
      { returnOriginal: false }
    )
    console.log("chk", rptChk)
    return rptChk
  },



};
