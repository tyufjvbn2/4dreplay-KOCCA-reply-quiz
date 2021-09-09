import { buildSchema } from "graphql";
import { scalarTypes } from "./type/scalarType";
import { replyTypes } from "./type/replyType";
import { quizTypes } from "./type/quizType";
import { replyQuery } from "./query/replyQuery";
import { quizQuery } from "./query/quizQuery";
import { replyMutation } from "./mutation/replyMutation";
import { quizMutation } from "./mutation/quizMutation";

export const schema = buildSchema(`

    ${scalarTypes}
    ${replyTypes}
    ${quizTypes}
    
    type Query {
        ${replyQuery}
        ${quizQuery}
    }

    type Mutation {
        ${replyMutation}
        ${quizMutation}
    }
    
`);
