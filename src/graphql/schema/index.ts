import { buildSchema } from "graphql";
import { scalarTypes } from "./type/scalarType"
import { replyTypes } from "./type/replyType"
import { replyQuery } from "./query/replyQuery"
import { quizQuery } from "./query/quizQuery";
import { replyMutation } from "./mutation/replyMutation"


export const schema = buildSchema(`

    ${scalarTypes}
    ${replyTypes}
    
    type Query {
        ${replyQuery}
        ${quizQuery}
    }

    type Mutation {
        ${replyMutation}
    }
    
`)

  