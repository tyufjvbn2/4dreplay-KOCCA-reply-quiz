import { buildSchema } from "graphql";

export const schema = buildSchema(`
    type Query {
        list: [String]
        reply: String
    }`);
