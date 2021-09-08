export const replyQuery = `
  test: String
  replyAll: [Reply]
  replyByVod(vod_id: String): [Reply]
  replyByUserId(user_id: String): [Reply]
  replyOne(_id: objectId): Reply
  reportAll: [Report]
  reportOne(_id: objectId): Report
  reportByReply(reply_id: objectId) : [Report]
`