import express from "express";
import { graphqlHTTP } from "express-graphql";
import * as dotenv from "dotenv";
dotenv.config();
const mongooseConfig = require("./config/config");

import { schema } from "./graphql/schema/index";
import { resolver } from "./graphql/resolver/resolver";

//
import expressPlayground from "graphql-playground-middleware-express";
//

try {
  mongooseConfig();

  const app = express();

  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: resolver,
      graphiql: true,
      pretty: true,
    })
  );
  app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

  const port = process.env.SERVER_PORT !== "" ? process.env.SERVER_PORT : 3000;

  app.listen(port, () => {
    console.log(
      `Server is running on ${process.env.SERVER_ORIGIN}:${port}/graphql`
    );
  });
} catch (err) {
  console.error("Server running failed : ", err);
}
