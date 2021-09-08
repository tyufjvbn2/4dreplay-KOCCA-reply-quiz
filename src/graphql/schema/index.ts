import { buildSchema } from "graphql";
import { replyMutation } from "./mutation/reply"
import { replyQuery } from "./query/reply"
import { replyType } from "./type/reply"
import { quizQuery } from "./query/quiz";

// test: String
// ${replySchema}
export const schema = buildSchema(`

    ${replyType}
    
    type Query {
        ${replyQuery}
        ${quizQuery}
    }

    type Mutation {
        ${replyMutation}
    }
    
`)

  