require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./app.js");

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.info(`Connected to database.`);
      });
    app.listen(PORT, () => {
      console.log(`The server started on port ${PORT}.`);
    });
  } catch (err) {
    console.log("Server Error:", err);
  }
};

start();
