const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Nokia} = require("../../models/Nokia");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let nokias = await Nokia.find().skip(skipRecords).limit(perPage);
  return res.send(nokias);
});
//get single products
router.get("/:id", auth,async (req, res) => {
  try {
    let nokia = await Nokia.findById(req.params.id);
    if (!nokia)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(nokia); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  validateProduct,auth,admin,async (req, res) => {
  let nokia = await Nokia.findById(req.params.id);
  nokia.name = req.body.name;
  nokia.Price = req.body.Price;
  nokia.picture = req.body.picture;
  nokia.technology= req.body.technology;
  nokia.Announced=req.body.Announced;
  nokia.Dimension=req.body.Dimension;
  nokia.Weight=req.body.Weight;
  nokia.Build=req.body.Build;
  nokia.Sim=req.body.Sim;
  nokia.Type=req.body.Type;
  nokia .Size=req.body.Size;
  nokia .Resolution=req.body.Resolution;
  nokia .Os=req.body.Os;
  nokia .Chipset=req.body.Chipset;
  nokia .Cpu=req.body.Cpu;
  nokia .Gpu=req.body.Gpu;
  nokia .FrontCamera=req.body.FrontCamera;
  nokia .CardSlot=req.body.CardSlot;
  nokia .Internal=req.body.Internal;
  nokia .Camera=req.body.Camera;
  nokia .Sound=req.body.Sound;
  nokia.Comms=req.body.Comms;
  nokia.Features=req.body.Features;
  nokia.Battery=req.body.Battery;
  nokia.Colors=req.body.Colors;
  nokia.mcamFeatures=req.body.mcamFeatures;
  nokia.mcamVideo=req.body.mcamVideo;
  nokia.ScamFeatures=req.body.ScamFeatures;
  nokia.ScamVideo=req.body.ScamVideo;
  nokia .Bluetooth=req.body.Bluetooth;
  nokia .NFC=req.body.NFC;
  nokia .Radio=req.body.Radio;
  nokia .GPS=req.body.GPS;
  nokia .Charging=req.body.Charging;
  await nokia.save();
  return res.send(nokia);
});
//delete a record
router.delete("/:id",auth,admin, async (req, res) => {
  let nokia = await Nokia.findByIdAndDelete(req.params.id);
  return res.send(nokia);
});
//Insert a record
router.post("/",validateProduct,auth,admin, async (req, res) => {
  let nokia = new Nokia();
  nokia.name = req.body.name;
  nokia.Price = req.body.Price;
  nokia.picture = req.body.picture;
  nokia.technology= req.body.technology;
  nokia.Announced=req.body.Announced;
  nokia.Dimension=req.body.Dimension;
  nokia.Weight=req.body.Weight;
  nokia.Build=req.body.Build;
  nokia.Sim=req.body.Sim;
  nokia.Type=req.body.Type;
  nokia .Size=req.body.Size;
  nokia .Resolution=req.body.Resolution;
  nokia .Os=req.body.Os;
  nokia .Chipset=req.body.Chipset;
  nokia .Cpu=req.body.Cpu;
  nokia .Gpu=req.body.Gpu;
  nokia .FrontCamera=req.body.FrontCamera;
  nokia .CardSlot=req.body.CardSlot;
  nokia .Internal=req.body.Internal;
  nokia .Camera=req.body.Camera;
  nokia .Sound=req.body.Sound;
  nokia.Comms=req.body.Comms;
  nokia.Features=req.body.Features;
  nokia.Battery=req.body.Battery;
  nokia.Colors=req.body.Colors;
  nokia.mcamFeatures=req.body.mcamFeatures;
  nokia.mcamVideo=req.body.mcamVideo;
  nokia.ScamFeatures=req.body.ScamFeatures;
  nokia.ScamVideo=req.body.ScamVideo;
  nokia .Bluetooth=req.body.Bluetooth;
  nokia .NFC=req.body.NFC;
  nokia .Radio=req.body.Radio;
  nokia .GPS=req.body.GPS;
  nokia .Charging=req.body.Charging;
  await nokia.save();
  return res.send(nokia);
});
module.exports = router;