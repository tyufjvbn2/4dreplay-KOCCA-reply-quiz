import { buildSchema } from "graphql";

export const schema = buildSchema(`

    scalar objectId

    scalar Date

    enum ReplyState {
        OPEN
        UNCHECKED
        CHECKED
        BLOCK
    }

    enum ReportReason {
        BAD_NICKNAME
        VIOLENT_TEXT
        SEXUAL_TEXT
        AD_TEXT
        REPEATED
        OUTLAW
        ETC
    }

    enum ReportState {
       UNCHECKED
       CHECKED
       DONE 
    }


    type Reply {
        _id: objectId
        vod_id: objectId
        user_id: objectId
        reply_text: String
        reply_report_state: ReplyState
        created_at: Date
        updated_at: Date
    }

    type Report {
        _id: objectId
        reply_id: objectId
        user_id: objectId
        report_reason : ReportReason
        report_text: String
        admin_check_state: ReportState
        created_at: Date
        updated_at: Date
    }
    
    type Query {
        test: String
        replyAll: [Reply]
        replyByVod(vod_id: String): [Reply]
        replyByUserId(user_id: String): [Reply]
        replyOne(_id: objectId): Reply
        reportAll: [Report]
        reportOne(_id: objectId): Report
        reportByReply(reply_id: objectId) : [Report]
    }
    
    type Mutation {
      createReply(vod_id: objectId, user_id: objectId, reply_text: String) : Reply
      deleteReply(_id: objectId): Reply
      updateReply(_id: objectId, reply_text: String): Reply
      changeReplyReportState(_id: objectId, reply_report_state: ReplyState): Reply
      createReport(reply_id: objectId, user_id: objectId, report_reason: ReportReason, report_text: String): Report
      checkReport(_id: objectId, admin_check_state: ReportState) : Report
    }`
);
