const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Samsung} = require("../../models/samsung");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let samsungs = await Samsung.find().skip(skipRecords).limit(perPage);
  return res.send(samsungs);
});
//get single products
router.get("/:id",async (req, res) => {
  try {
    let samsung = await Samsung.findById(req.params.id);
    if (!samsung)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(samsung); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id", async (req, res) => {
  let samsung = await Samsung.findById(req.params.id);
  samsung.name = req.body.name;
  samsung.Price = req.body.Price;
  samsung.picture = req.body.picture;
  samsung.technology= req.body.technology;
  samsung.Announced=req.body.Announced;
  samsung.Dimension=req.body.Dimension;
  samsung.Weight=req.body.Weight;
  samsung.Build=req.body.Build;
  samsung.Sim=req.body.Sim;
  samsung.Type=req.body.Type;
  samsung .Size=req.body.Size;
  samsung .Resolution=req.body.Resolution;
  samsung .Os=req.body.Os;
  samsung .Chipset=req.body.Chipset;
  samsung .Cpu=req.body.Cpu;
  samsung .Gpu=req.body.Gpu;
  samsung .FrontCamera=req.body.FrontCamera;
  samsung .CardSlot=req.body.CardSlot;
  samsung .Internal=req.body.Internal;
  samsung .Camera=req.body.Camera;
  samsung .Sound=req.body.Sound;
  samsung.Comms=req.body.Comms;
  samsung.Features=req.body.Features;
  samsung.Battery=req.body.Battery;
  samsung.Colors=req.body.Colors;
  samsung.mcamFeatures=req.body.mcamFeatures;
  samsung.mcamVideo=req.body.mcamVideo;
  samsung.ScamFeatures=req.body.ScamFeatures;
  samsung.ScamVideo=req.body.ScamVideo;
  samsung .Bluetooth=req.body.Bluetooth;
  samsung .NFC=req.body.NFC;
  samsung .Radio=req.body.Radio;
  samsung .GPS=req.body.GPS;
  samsung .Charging=req.body.Charging;
  await samsung.save();
  return res.send(samsung);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let samsung = await Samsung.findByIdAndDelete(req.params.id);
  return res.send(samsung);
});
//Insert a record
router.post("/",async (req, res) => {
  let samsung = new Samsung();
  samsung.name = req.body.name;
  samsung.Price = req.body.Price;
  samsung.picture = req.body.picture;
  samsung.technology= req.body.technology;
  samsung.Announced=req.body.Announced;
  samsung.Dimension=req.body.Dimension;
  samsung.Weight=req.body.Weight;
  samsung.Build=req.body.Build;
  samsung.Sim=req.body.Sim;
  samsung.Type=req.body.Type;
  samsung .Size=req.body.Size;
  samsung .Resolution=req.body.Resolution;
  samsung .Os=req.body.Os;
  samsung .Chipset=req.body.Chipset;
  samsung .Cpu=req.body.Cpu;
  samsung .Gpu=req.body.Gpu;
  samsung .FrontCamera=req.body.FrontCamera;
  samsung .CardSlot=req.body.CardSlot;
  samsung .Internal=req.body.Internal;
  samsung .Camera=req.body.Camera;
  samsung .Sound=req.body.Sound;
  samsung.Comms=req.body.Comms;
  samsung.Features=req.body.Features;
  samsung.Battery=req.body.Battery;
  samsung.Colors=req.body.Colors;
  samsung.mcamFeatures=req.body.mcamFeatures;
  samsung.mcamVideo=req.body.mcamVideo;
  samsung.ScamFeatures=req.body.ScamFeatures;
  samsung.ScamVideo=req.body.ScamVideo;
  samsung .Bluetooth=req.body.Bluetooth;
  samsung .NFC=req.body.NFC;
  samsung .Radio=req.body.Radio;
  samsung .GPS=req.body.GPS;
  samsung .Charging=req.body.Charging;
  await samsung.save();
  return res.send(samsung);
});
module.exports = router;