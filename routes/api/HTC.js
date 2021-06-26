const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {HTC} = require("../../models/HTC");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let htcs = await HTC.find().skip(skipRecords).limit(perPage);
  return res.send(htcs);
});
//get single products
router.get("/:id", auth,async (req, res) => {
  try {
    let htc = await HTC.findById(req.params.id);
    if (!htc)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(htc); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",validateProduct,auth,admin,  async (req, res) => {
  let htc = await HTC.findById(req.params.id);
  htc.name = req.body.name;
  htc.Price = req.body.Price;
  htc.picture = req.body.picture;
  htc.technology= req.body.technology;
  htc.Announced=req.body.Announced;
  htc.Dimension=req.body.Dimension;
  htc.Weight=req.body.Weight;
  htc.Build=req.body.Build;
  htc .Sim=req.body.Sim;
  htc .Type=req.body.Type;
  htc .Size=req.body.Size;
  htc .Resolution=req.body.Resolution;
  htc .Os=req.body.Os;
  htc .Chipset=req.body.Chipset;
  htc .Cpu=req.body.Cpu;
  htc .Gpu=req.body.Gpu;
  htc .FrontCamera=req.body.FrontCamera;
  htc .CardSlot=req.body.CardSlot;
  htc .Internal=req.body.Internal;
  htc .Camera=req.body.Camera;
  htc .Sound=req.body.Sound;
  htc .Comms=req.body.Comms;
  htc .Features=req.body.Features;
  htc .Battery=req.body.Battery;
  htc .Colors=req.body.Colors;
  htc .mcamFeatures=req.body.mcamFeatures;
  htc .mcamVideo=req.body.mcamVideo;
  htc .ScamFeatures=req.body.ScamFeatures;
  htc .ScamVideo=req.body.ScamVideo;
  htc .Bluetooth=req.body.Bluetooth;
  htc .NFC=req.body.NFC;
  htc .Radio=req.body.Radio;
  htc .GPS=req.body.GPS;
  htc .Charging=req.body.Charging;
  await htc.save();
  return res.send(htc);
});
//delete a record
router.delete("/:id",auth,admin,async (req, res) => {
  let htc = await HTC.findByIdAndDelete(req.params.id);
  return res.send(htc);
});
//Insert a record
router.post("/", validateProduct,auth,admin,async (req, res) => {
  let htc = new HTC();
  htc.name = req.body.name;
  htc.Price = req.body.Price;
  htc.picture = req.body.picture;
  htc.technology= req.body.technology;
  htc.Announced=req.body.Announced;
  htc.Dimension=req.body.Dimension;
  htc.Weight=req.body.Weight;
  htc.Build=req.body.Build;
  htc .Sim=req.body.Sim;
  htc .Type=req.body.Type;
  htc .Size=req.body.Size;
  htc .Resolution=req.body.Resolution;
  htc .Os=req.body.Os;
  htc .Chipset=req.body.Chipset;
  htc .Cpu=req.body.Cpu;
  htc .Gpu=req.body.Gpu;
  htc .FrontCamera=req.body.FrontCamera;
  htc .CardSlot=req.body.CardSlot;
  htc .Internal=req.body.Internal;
  htc .Camera=req.body.Camera;
  htc .Sound=req.body.Sound;
  htc .Comms=req.body.Comms;
  htc .Features=req.body.Features;
  htc .Battery=req.body.Battery;
  htc .Colors=req.body.Colors;
  htc .mcamFeatures=req.body.mcamFeatures;
  htc .mcamVideo=req.body.mcamVideo;
  htc .ScamFeatures=req.body.ScamFeatures;
  htc .ScamVideo=req.body.ScamVideo;
  htc .Bluetooth=req.body.Bluetooth;
  htc .NFC=req.body.NFC;
  htc .Radio=req.body.Radio;
  htc .GPS=req.body.GPS;
  htc .Charging=req.body.Charging;
  await htc.save();
  return res.send(htc);
});
module.exports = router;