const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Motorola} = require("../../models/Motorola");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let motorolas = await Motorola.find().skip(skipRecords).limit(perPage);
  return res.send(motorolas);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let motorola = await Motorola.findById(req.params.id);
    if (!motorola)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(motorola); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let motorola = await Motorola.findById(req.params.id);
  motorola.name = req.body.name;
  motorola.Price = req.body.Price;
  motorola.picture = req.body.picture;
  motorola.technology= req.body.technology;
  motorola.Announced=req.body.Announced;
  motorola.Dimension=req.body.Dimension;
  motorola.Weight=req.body.Weight;
  motorola.Build=req.body.Build;
  motorola.Sim=req.body.Sim;
  motorola.Type=req.body.Type;
  motorola .Size=req.body.Size;
  motorola .Resolution=req.body.Resolution;
  motorola .Os=req.body.Os;
  motorola .Chipset=req.body.Chipset;
  motorola .Cpu=req.body.Cpu;
  motorola .Gpu=req.body.Gpu;
  motorola .FrontCamera=req.body.FrontCamera;
  motorola .CardSlot=req.body.CardSlot;
  motorola .Internal=req.body.Internal;
  motorola .Camera=req.body.Camera;
  motorola .Sound=req.body.Sound;
  motorola.Comms=req.body.Comms;
  motorola.Features=req.body.Features;
  motorola.Battery=req.body.Battery;
  motorola.Colors=req.body.Colors;
  motorola.mcamFeatures=req.body.mcamFeatures;
  motorola.mcamVideo=req.body.mcamVideo;
  motorola.ScamFeatures=req.body.ScamFeatures;
  motorola.ScamVideo=req.body.ScamVideo;
  motorola .Bluetooth=req.body.Bluetooth;
  motorola .NFC=req.body.NFC;
  motorola .Radio=req.body.Radio;
  motorola .GPS=req.body.GPS;
  motorola .Charging=req.body.Charging;
  await motorola.save();
  return res.send(motorola);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let motorola = await Motorola.findByIdAndDelete(req.params.id);
  return res.send(motorola);
});
//Insert a record
router.post("/", async (req, res) => {
  let motorola = new Motorola();
  motorola.name = req.body.name;
  motorola.Price = req.body.Price;
  motorola.picture = req.body.picture;
  motorola.technology= req.body.technology;
  motorola.Announced=req.body.Announced;
  motorola.Dimension=req.body.Dimension;
  motorola.Weight=req.body.Weight;
  motorola.Build=req.body.Build;
  motorola.Sim=req.body.Sim;
  motorola.Type=req.body.Type;
  motorola .Size=req.body.Size;
  motorola .Resolution=req.body.Resolution;
  motorola .Os=req.body.Os;
  motorola .Chipset=req.body.Chipset;
  motorola .Cpu=req.body.Cpu;
  motorola .Gpu=req.body.Gpu;
  motorola .FrontCamera=req.body.FrontCamera;
  motorola .CardSlot=req.body.CardSlot;
  motorola .Internal=req.body.Internal;
  motorola .Camera=req.body.Camera;
  motorola .Sound=req.body.Sound;
  motorola.Comms=req.body.Comms;
  motorola.Features=req.body.Features;
  motorola.Battery=req.body.Battery;
  motorola.Colors=req.body.Colors;
  motorola.mcamFeatures=req.body.mcamFeatures;
  motorola.mcamVideo=req.body.mcamVideo;
  motorola.ScamFeatures=req.body.ScamFeatures;
  motorola.ScamVideo=req.body.ScamVideo;
  motorola .Bluetooth=req.body.Bluetooth;
  motorola .NFC=req.body.NFC;
  motorola .Radio=req.body.Radio;
  motorola .GPS=req.body.GPS;
  motorola .Charging=req.body.Charging;
  await motorola.save();
  return res.send(motorola);
});
module.exports = router;