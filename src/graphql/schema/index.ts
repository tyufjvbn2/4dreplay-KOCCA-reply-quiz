import { buildSchema } from "graphql";

import { scalarTypes } from "./type/scalarType";
import { replyTypes } from "./type/replyType";
import { quizTypes } from "./type/quizType";
import { noticeTypes } from "./type/noticeType";
import { eventTypes } from "./type/eventType";

import { replyQuery } from "./query/replyQuery";
import { quizQuery } from "./query/quizQuery";
import { noticeQuery } from "./query/noticeQuery";
import { quizUserQuery } from "./query/quizUserQuery";
import { eventQuery } from "./query/eventQuery";

import { replyMutation } from "./mutation/replyMutation";
import { quizMutation } from "./mutation/quizMutation";
import { noticeMutation } from "./mutation/noticeMutation";
import { quizUserMutation } from "./mutation/quizUserMutation";
import { eventMutation } from "./mutation/eventMutation";

export const schema = buildSchema(`

    ${scalarTypes}
    ${replyTypes}
    ${quizTypes}
    ${noticeTypes}
    ${eventTypes}
    
    type Query {
        ${replyQuery}
        ${quizQuery}
        ${noticeQuery}
        ${quizUserQuery}
        ${eventQuery}
    }

    type Mutation {
        ${replyMutation}
        ${quizMutation}
        ${noticeMutation}
        ${quizUserMutation}
        ${eventMutation}
    }
    
`);
