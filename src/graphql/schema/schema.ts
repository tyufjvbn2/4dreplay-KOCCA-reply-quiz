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

    enum LikeState {
        LIKE
        DISLIKE
        NONE
    }

    type Reply {
        _id: objectId
        vod_id: objectId
        user_id: objectId
        reply_text: String
        reply_report_state: ReplyState
        like_count: Int
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

    type Like {
        _id: objectId
        reply_id: objectId
        user_id: objectId
        like_state: LikeState
        created_at: Date
    }
    
    type Query {
        test: String
        replyAll: [Reply]
        replyOne: Reply
        reportAll: [Report]
        reportOne: Report
        likeAll: [Like]
    }`);
