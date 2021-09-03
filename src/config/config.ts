import * as dotenv from "dotenv";
const mongoose = require("mongoose");
dotenv.config();

export const config = {
  db: {
    production: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
    development: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}_dev`,
    test: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}_test`,
  },
};

module.exports = async () => {
  try {
    //Mongo DB connection check function
    const connect = () => {
      if (process.env.MONGO_HOST !== "localhost") {
        mongoose.set("debug", true);
      }

      mongoose.connect(
        config.db.development as string,
        {
          keepAlive: true,
          autoIndex: true,
        },
        (err: Error) => {
          if (err) {
            console.log("Mongo DB connection error : ", err);
          }
        }
      );
    };

    //Initial connection to Mongo DB
    connect();

    //connection state가 disconnected일때 실행되는 함수
    mongoose.connection.on("disconnected", () => {
      console.log("Mongo DB connection have problem");
      console.log("Trying to reconnect......");
      connect();
    });

    //connected
    mongoose.connection.on("connected", () => {
      console.log("Mongo connection on!");
    });
  } catch (err) {
    console.error("Error occured while trying reconnection : ", err);
  }
};
