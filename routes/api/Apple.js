const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Apple} = require("../../models/Apple");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let apples = await Apple.find().skip(skipRecords).limit(perPage);
  return res.send(apples);
});
//get single products
router.get("/:id" ,async (req, res) => {
  try {
    let apple = await Apple.findById(req.params.id);
    if (!apple)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(apple); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",async (req, res) => {
  let apple = await Apple.findById(req.params.id);
  apple.name = req.body.name;
  apple.Price = req.body.Price;
  apple.picture = req.body.picture;
  apple.technology= req.body.technology;
  apple.Announced=req.body.Announced;
  apple.Dimension=req.body.Dimension;
  apple.Weight=req.body.Weight;
  apple.Build=req.body.Build;
  apple.Sim=req.body.Sim;
  apple.Type=req.body.Type;
  apple .Size=req.body.Size;
  apple .Resolution=req.body.Resolution;
  apple .Os=req.body.Os;
  apple .Chipset=req.body.Chipset;
  apple .Cpu=req.body.Cpu;
  apple .Gpu=req.body.Gpu;
  apple .FrontCamera=req.body.FrontCamera;
  apple .CardSlot=req.body.CardSlot;
  apple.Internal=req.body.Internal;
  apple.Camera=req.body.Camera;
  apple.Sound=req.body.Sound;
  apple.Comms=req.body.Comms;
  apple.Features=req.body.Features;
  apple.Battery=req.body.Battery;
  apple.Colors=req.body.Colors;
  apple.mcamFeatures=req.body.mcamFeatures;
  apple.mcamVideo=req.body.mcamVideo;
  apple.ScamFeatures=req.body.ScamFeatures;
  apple.ScamVideo=req.body.ScamVideo;
  apple.Bluetooth=req.body.Bluetooth;
  apple.NFC=req.body.NFC;
  apple.Radio=req.body.Radio;
  apple.GPS=req.body.GPS;
  apple.Charging=req.body.Charging;

  await apple.save();
  return res.send(apple);
});
//delete a record
router.delete("/:id",async (req, res) => {
  let apple = await Apple.findByIdAndDelete(req.params.id);
  return res.send(apple);
});
//Insert a record
router.post("/", async (req, res) => {
  let apple = new Apple();
  apple.name = req.body.name;
  apple.Price = req.body.Price;
  apple.picture = req.body.picture;
  apple.technology= req.body.technology;
  apple.Announced=req.body.Announced;
  apple.Dimension=req.body.Dimension;
  apple.Weight=req.body.Weight;
  apple.Build=req.body.Build;
  apple.Sim=req.body.Sim;
  apple.Type=req.body.Type;
  apple .Size=req.body.Size;
  apple .Resolution=req.body.Resolution;
  apple .Os=req.body.Os;
  apple .Chipset=req.body.Chipset;
  apple .Cpu=req.body.Cpu;
  apple .Gpu=req.body.Gpu;
  apple .FrontCamera=req.body.FrontCamera;
  apple .CardSlot=req.body.CardSlot;
  apple.Internal=req.body.Internal;
  apple.Camera=req.body.Camera;
  apple.Sound=req.body.Sound;
  apple.Comms=req.body.Comms;
  apple.Features=req.body.Features;
  apple.Battery=req.body.Battery;
  apple.Colors=req.body.Colors;
  apple.mcamFeatures=req.body.mcamFeatures;
  apple.mcamVideo=req.body.mcamVideo;
  apple.ScamFeatures=req.body.ScamFeatures;
  apple.ScamVideo=req.body.ScamVideo;
  apple.Bluetooth=req.body.Bluetooth;
  apple.NFC=req.body.NFC;
  apple.Radio=req.body.Radio;
  apple.GPS=req.body.GPS;
  apple.Charging=req.body.Charging;
  await apple.save();
  return res.send(apple);
});
module.exports = router;