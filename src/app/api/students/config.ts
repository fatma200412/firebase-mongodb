import mongoose from "mongoose";

const mongoDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI || "")
    .then(() => {
      console.log("connected mongoDB");
    })
    .catch((err: Error) => {
      console.log("failed" + err);
    });
};

export default mongoDB;
