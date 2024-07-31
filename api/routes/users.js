const User = require("../models/user.js");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.get("/get-user", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/update-user", async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.body.userId }, req.body);
    res.status(200).json("Başarılı bir şekilde değiştirildi.");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/delete-user", async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.body.userId });
    res.status(200).json("Başarılı bir şekilde silindi.");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;
    const saltPass = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashSync(userPassword, saltPass);
    const newUser = new User({
      userName,
      userEmail,
      userPassword: hashedPassword,
    });
    await newUser.save();
    res.status(200).json("Kullanıcı Kaydı Başarılı Bir Şekilde Gerçekleşti.");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const findUser = await User.findOne({ userEmail: req.body.userEmail });
    if (!findUser) {
      return res.status(400).json("Böyle bir Kullanıcı Bulunamadı.");
    }
    const validPassword = await bcrypt.compare(
      req.body.userPassword,
      findUser.userPassword
    );
    if (!validPassword) {
      return res.status(403).json("Şifre Doğru Değil.");
    }
    res.status(200).json({
      message: `Hoşgeldiniz ${findUser.userName}`,
      user: findUser,
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
