const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Huawei} = require("../../models/Huawei");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let huaweis = await Huawei.find().skip(skipRecords).limit(perPage);
  return res.send(huaweis);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let huawei = await Huawei.findById(req.params.id);
    if (!huawei)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(huawei); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let huawei = await Huawei.findById(req.params.id);
  huawei.name = req.body.name;
  huawei.Price = req.body.Price;
  huawei.picture = req.body.picture;
  huawei.technology= req.body.technology;
  huawei.Announced=req.body.Announced;
  huawei.Dimension=req.body.Dimension;
  huawei.Weight=req.body.Weight;
  huawei.Build=req.body.Build;
  huawei.Sim=req.body.Sim;
  huawei.Type=req.body.Type;
  huawei.Size=req.body.Size;
  huawei.Resolution=req.body.Resolution;
  huawei.Os=req.body.Os;
  huawei.Chipset=req.body.Chipset;
  huawei.Cpu=req.body.Cpu;
  huawei.Gpu=req.body.Gpu;
  huawei.FrontCamera=req.body.FrontCamera;
  huawei.CardSlot=req.body.CardSlot;
  huawei.Internal=req.body.Internal;
  huawei.Camera=req.body.Camera;
  huawei.Sound=req.body.Sound;
  huawei.Comms=req.body.Comms;
  huawei.Features=req.body.Features;
  huawei.Battery=req.body.Battery;
  huawei .Colors=req.body.Colors;
  huawei .mcamFeatures=req.body.mcamFeatures;
  huawei .mcamVideo=req.body.mcamVideo;
  huawei .ScamFeatures=req.body.ScamFeatures;
  huawei .ScamVideo=req.body.ScamVideo;
  huawei .Bluetooth=req.body.Bluetooth;
  huawei .NFC=req.body.NFC;
  huawei .Radio=req.body.Radio;
  huawei .GPS=req.body.GPS;
  huawei .Charging=req.body.Charging;
  await huawei.save();
  return res.send(huawei);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let huawei = await Huawei.findByIdAndDelete(req.params.id);
  return res.send(huawei);
});
//Insert a record
router.post("/", async (req, res) => {
  let huawei = new Huawei();
  huawei.name = req.body.name;
  huawei.Price = req.body.Price;
  huawei.picture = req.body.picture;
  huawei.technology= req.body.technology;
  huawei.Announced=req.body.Announced;
  huawei.Dimension=req.body.Dimension;
  huawei.Weight=req.body.Weight;
  huawei.Build=req.body.Build;
  huawei.Sim=req.body.Sim;
  huawei.Type=req.body.Type;
  huawei.Size=req.body.Size;
  huawei.Resolution=req.body.Resolution;
  huawei.Os=req.body.Os;
  huawei.Chipset=req.body.Chipset;
  huawei.Cpu=req.body.Cpu;
  huawei.Gpu=req.body.Gpu;
  huawei.FrontCamera=req.body.FrontCamera;
  huawei.CardSlot=req.body.CardSlot;
  huawei.Internal=req.body.Internal;
  huawei.Camera=req.body.Camera;
  huawei.Sound=req.body.Sound;
  huawei.Comms=req.body.Comms;
  huawei.Features=req.body.Features;
  huawei.Battery=req.body.Battery;
  huawei .Colors=req.body.Colors;
  huawei .mcamFeatures=req.body.mcamFeatures;
  huawei .mcamVideo=req.body.mcamVideo;
  huawei .ScamFeatures=req.body.ScamFeatures;
  huawei .ScamVideo=req.body.ScamVideo;
  huawei .Bluetooth=req.body.Bluetooth;
  huawei .NFC=req.body.NFC;
  huawei .Radio=req.body.Radio;
  huawei .GPS=req.body.GPS;
  huawei .Charging=req.body.Charging;
  await huawei.save();
  return res.send(huawei);
});
module.exports = router;