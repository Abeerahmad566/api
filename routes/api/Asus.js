const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Asus} = require("../../models/Asus");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let asuss = await Asus.find().skip(skipRecords).limit(perPage);
  return res.send(asuss);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let asus = await Asus.findById(req.params.id);
    if (!asus)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(asus); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let asus = await Asus.findById(req.params.id);
  asus.name = req.body.name;
  asus.Price = req.body.Price;
  asus.picture = req.body.picture;
  asus.technology= req.body.technology;
  asus.Announced=req.body.Announced;
  asus.Dimension=req.body.Dimension;
  asus.Weight=req.body.Weight;
  asus.Build=req.body.Build;
  asus.Sim=req.body.Sim;
  asus.Type=req.body.Type;
  asus.Size=req.body.Size;
  asus.Resolution=req.body.Resolution;
  asus.Os=req.body.Os;
  asus.Chipset=req.body.Chipset;
  asus .Cpu=req.body.Cpu;
  asus .Gpu=req.body.Gpu;
  asus .FrontCamera=req.body.FrontCamera;
  asus .CardSlot=req.body.CardSlot;
  asus .Internal=req.body.Internal;
  asus .Camera=req.body.Camera;
  asus .Sound=req.body.Sound;
  asus .Comms=req.body.Comms;
  asus .Features=req.body.Features;
  asus .Battery=req.body.Battery;
  asus .Colors=req.body.Colors;
  asus .mcamFeatures=req.body.mcamFeatures;
  asus .mcamVideo=req.body.mcamVideo;
  asus .ScamFeatures=req.body.ScamFeatures;
  asus .ScamVideo=req.body.ScamVideo;
  asus .Bluetooth=req.body.Bluetooth;
  asus .NFC=req.body.NFC;
  asus .Radio=req.body.Radio;
  asus .GPS=req.body.GPS;
  asus .Charging=req.body.Charging;
  await asus.save();
  return res.send(asus);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let asus = await Asus.findByIdAndDelete(req.params.id);
  return res.send(asus);
});
//Insert a record
router.post("/", async (req, res) => {
  let asus = new Asus();
  asus.name = req.body.name;
  asus.Price = req.body.Price;
  asus.picture = req.body.picture;
  asus.technology= req.body.technology;
  asus.Announced=req.body.Announced;
  asus.Dimension=req.body.Dimension;
  asus.Weight=req.body.Weight;
  asus.Build=req.body.Build;
  asus.Sim=req.body.Sim;
  asus.Type=req.body.Type;
  asus.Size=req.body.Size;
  asus.Resolution=req.body.Resolution;
  asus.Os=req.body.Os;
  asus.Chipset=req.body.Chipset;
  asus .Cpu=req.body.Cpu;
  asus .Gpu=req.body.Gpu;
  asus .FrontCamera=req.body.FrontCamera;
  asus .CardSlot=req.body.CardSlot;
  asus .Internal=req.body.Internal;
  asus .Camera=req.body.Camera;
  asus .Sound=req.body.Sound;
  asus .Comms=req.body.Comms;
  asus .Features=req.body.Features;
  asus .Battery=req.body.Battery;
  asus .Colors=req.body.Colors;
  asus .mcamFeatures=req.body.mcamFeatures;
  asus .mcamVideo=req.body.mcamVideo;
  asus .ScamFeatures=req.body.ScamFeatures;
  asus .ScamVideo=req.body.ScamVideo;
  asus .Bluetooth=req.body.Bluetooth;
  asus .NFC=req.body.NFC;
  asus .Radio=req.body.Radio;
  asus .GPS=req.body.GPS;
  asus .Charging=req.body.Charging;
  await asus.save();
  return res.send(asus);
});
module.exports = router;