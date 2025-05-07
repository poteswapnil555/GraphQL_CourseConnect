import mongoose from "mongoose";

export const connectDB = (uri: string) =>
  mongoose
    .connect(uri, {
      dbName: "GraphQL",
    })
    .then((c) => {
      console.log(`Connected With ${c.connection.name}`);
    })
    .catch((err) => {
      console.log(err);
    });
