const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PORT = 5000;
const cors = require("cors");

//Routes
const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");
const billRoute = require("./routes/bills.js");
const userRoute = require("./routes/users.js");

console.log("Hello World");

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://oghuzkhan:GaMv1iLbCK5nKX09@cluster0.et2yo57.mongodb.net/yemeksepeti"
    );
    console.log("MongoDB'ye Giriş Yapıldı");
  } catch (error) {
    throw ("MongoDB'ye Giriş Yapılamadı", error);
  }
};

app.use(express.json());
app.use(cors());

//Routes Run
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  connect();
  console.log(`Example app listening on port ${PORT}`);
});

app.get("/", (req, res) => res.send("Hello World"));
