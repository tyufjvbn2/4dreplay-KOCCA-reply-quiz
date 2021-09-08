import mongoose from "mongoose"


export const enum ReplyState {
  OPEN = "OPEN",
  UNCHECKED = "UNCHECKED",
  CHECKED = "CHECKED",
  BLOCK = "BLOCK"
}

export const enum ReportState {
  UNCHECKED = "UNCHECKED",
  CHECKED = "CHECKED",
  DONE = "DONE"
}

export const enum ReportReason {
  BAD_NICKNAME = "BAD_NICKNAME",
  VIOLENT_TEXT = "VIOLENT_TEXT",
  SEXUAL_TEXT = '"SEXUAL_TEXT',
  AD_TEXT = "AD_TEXT",
  REPEATED = "REPEATED",
  OUTLAW = "OUTLAW",
  ETC = "ETC"
}

export interface Params {
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