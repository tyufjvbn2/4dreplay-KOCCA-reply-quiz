import * as dotenv from "dotenv";
const mongoose = require("mongoose");
dotenv.config();

const config = {
  db: {
    production: process.env.MONGODB_HOST,
    development: `${process.env.MONGODB_HOST}`,
    test: `${process.env.MONGODB_HOST}`,
  },
};

module.exports = async () => {
  try {
    //Mongo DB connection check function
    const connect = () => {
      if (config.db.production === "") {
        mongoose.set("debug", true);
      }

      mongoose.connect(
        config.db.test as string,
        {
          keepAlive: true,
          autoIndex: true,
        },
        (err: Error) => {
          if (err) {
            console.log("Mongo DB connection error on init : ", err);
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
