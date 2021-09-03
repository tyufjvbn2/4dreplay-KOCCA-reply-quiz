import { buildSchema } from "graphql";

// const dateValue = (value: any) => {
//   if (value instanceof Date) {
//     return value;
//   }
// };

// const DateType = new GraphQLScalarType({
//   name: "Date",
//   serialize: dateValue,
//   parseValue: dateValue,
//   parseLiteral(ast) {
//     return dateValue(ast.value);
//   },
// });

export const schema = buildSchema(`

    scalar ObjectId

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
        _id: ObjectId
        vod_id: ObjectId
        user_id: ObjectId
        reply_text: String
        reply_report_state: ReplyState
        created_at: Date
        updated_at: Date
    }

    type Report {
        _id: ObjectId
        reply_id: ObjectId
        user_id: ObjectId
        report_reason : ReportReason
        report_text: String
        admin_check_state: ReportState
        created_at: Date
        updated_at: Date
    }
    
    type Query {
        replyAll: [Reply]
        replyOne: Reply
        reportAll: [Report]
        reportOne: Report
    }`);
