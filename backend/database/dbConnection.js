import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Hungry-Lotus",
    })
    .then(() => {
      console.log("Connected to the database successfully!");
    })
    .catch((err) => {
      console.log(`An error occured while connecting to the database! ${err}`);
    });
};