export const replyMutation = `
    createReply(vod_id: objectId, user_id: objectId, reply_text: String) : Reply
    deleteReply(_id: objectId): Reply
    updateReply(_id: objectId, reply_text: String): Reply
    changeReplyReportState(_id: objectId, reply_report_state: ReplyState): Reply
    createReport(reply_id: objectId, user_id: objectId, report_reason: ReportReason, report_text: String): Report
    checkReport(_id: objectId, admin_check_state: ReportState) : Report

`