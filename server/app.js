require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const path = require("path");
const router = require("./routes/index");
const errorHandler = require("./middleware/errorHandleMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
app.use(errorHandler); //обработка ошибок ставиттся в конце

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Run" });
// });

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

// async function add() {
//   let type = {
//     name: "John",
//   };

//   let response = await fetch("http://127.0.0.1:5000/api/type/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(type),
//   });

//   let result = await response.json();
//   console.log(result);
// }

// add();
