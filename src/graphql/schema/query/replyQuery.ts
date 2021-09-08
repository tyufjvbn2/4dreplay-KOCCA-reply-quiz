export const replyQuery = `
  test: String
  replyList(first: Int, offset: Int, reply_report_state: ReplyState): [Reply]
  replyByVod(vod_id: String): [Reply]
  replyByUserId(user_id: String): [Reply]
  replyOne(_id: objectId): Reply
  reportList(first: Int, offset: Int, admin_check_state: ReportState): [Report]
  reportOne(_id: objectId): Report
  reportByReply(reply_id: objectId) : [Report]
`;
