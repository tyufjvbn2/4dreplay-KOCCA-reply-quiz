import express from "express";
import { graphqlHTTP } from "express-graphql";
import * as dotenv from "dotenv";
dotenv.config();
const mongooseConfig = require("./config/config");

import { schema } from "./graphql/schema/schema";
import { root } from "./graphql/root/root";

try {
  mongooseConfig();

  const app = express();

  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    })
  );

  const port = process.env.SERVER_PORT !== "" ? process.env.SERVER_PORT : 3000;

  app.listen(port, () => {
    console.log(
      `Server is running on ${process.env.SERVER_ORIGIN}:${port}/graphql`
    );
  });
} catch (err) {
  console.error("Server running failed : ", err);
}
