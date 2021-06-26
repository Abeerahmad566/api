const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Poco} = require("../../models/Poco");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let pocos = await Poco.find().skip(skipRecords).limit(perPage);
  return res.send(pocos);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let poco = await Poco.findById(req.params.id);
    if (!poco)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(poco); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let poco = await Poco.findById(req.params.id);
  poco.name = req.body.name;
  poco.Price = req.body.Price;
  poco.picture = req.body.picture;
  poco.technology= req.body.technology;
  poco.Announced=req.body.Announced;
  poco.Dimension=req.body.Dimension;
  poco.Weight=req.body.Weight;
  poco.Build=req.body.Build;
  poco.Sim=req.body.Sim;
  poco.Type=req.body.Type;
  poco .Size=req.body.Size;
  poco .Resolution=req.body.Resolution;
  poco .Os=req.body.Os;
  poco .Chipset=req.body.Chipset;
  poco .Cpu=req.body.Cpu;
  poco .Gpu=req.body.Gpu;
  poco .FrontCamera=req.body.FrontCamera;
  poco .CardSlot=req.body.CardSlot;
  poco .Internal=req.body.Internal;
  poco .Camera=req.body.Camera;
  poco .Sound=req.body.Sound;
  poco.Comms=req.body.Comms;
  poco.Features=req.body.Features;
  poco.Battery=req.body.Battery;
  poco.Colors=req.body.Colors;
  poco.mcamFeatures=req.body.mcamFeatures;
  poco.mcamVideo=req.body.mcamVideo;
  poco.ScamFeatures=req.body.ScamFeatures;
  poco.ScamVideo=req.body.ScamVideo;
  poco .Bluetooth=req.body.Bluetooth;
  poco .NFC=req.body.NFC;
  poco .Radio=req.body.Radio;
  poco .GPS=req.body.GPS;
  poco .Charging=req.body.Charging;
  await poco.save();
  return res.send(poco);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let poco = await Poco.findByIdAndDelete(req.params.id);
  return res.send(poco);
});
//Insert a record
router.post("/", async (req, res) => {
  let poco = new Poco();
  poco.name = req.body.name;
  poco.Price = req.body.Price;
  poco.picture = req.body.picture;
  poco.technology= req.body.technology;
  poco.Announced=req.body.Announced;
  poco.Dimension=req.body.Dimension;
  poco.Weight=req.body.Weight;
  poco.Build=req.body.Build;
  poco.Sim=req.body.Sim;
  poco.Type=req.body.Type;
  poco .Size=req.body.Size;
  poco .Resolution=req.body.Resolution;
  poco .Os=req.body.Os;
  poco .Chipset=req.body.Chipset;
  poco .Cpu=req.body.Cpu;
  poco .Gpu=req.body.Gpu;
  poco .FrontCamera=req.body.FrontCamera;
  poco .CardSlot=req.body.CardSlot;
  poco .Internal=req.body.Internal;
  poco .Camera=req.body.Camera;
  poco .Sound=req.body.Sound;
  poco.Comms=req.body.Comms;
  poco.Features=req.body.Features;
  poco.Battery=req.body.Battery;
  poco.Colors=req.body.Colors;
  poco.mcamFeatures=req.body.mcamFeatures;
  poco.mcamVideo=req.body.mcamVideo;
  poco.ScamFeatures=req.body.ScamFeatures;
  poco.ScamVideo=req.body.ScamVideo;
  poco .Bluetooth=req.body.Bluetooth;
  poco .NFC=req.body.NFC;
  poco .Radio=req.body.Radio;
  poco .GPS=req.body.GPS;
  poco .Charging=req.body.Charging;
  await poco.save();
  return res.send(poco);
});
module.exports = router;