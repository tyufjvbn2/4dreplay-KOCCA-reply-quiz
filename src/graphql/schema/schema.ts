import { buildSchema } from "graphql";

// type Reply {
//   vodId: String
//     userId: String
//     text: String
//     report: {
//       type: String,
//       enum: ["OPEN", "UNCHECKED", "CHECKED", "BLOCK"],
//     }
//     createdAt: Date
//     updatedAt: Date
// }

export const schema = buildSchema(`

    enum State {
        OPEN
        UNCHECKED
        CHECKED
        BLOCK
    }

    type Reply {
        vodId: String
        userId: String
        text: String
        report: State
        createdAt: String
        updatedAt: String
    }
    
    type Query {
        replyAll: [Reply]
        replyOne: String
        reportAll: [String]
        reportOne: String
    }`);
