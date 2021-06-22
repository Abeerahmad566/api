const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Xiaomi} = require("../../models/Xiaomi");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let xiaomis = await Xiaomi.find().skip(skipRecords).limit(perPage);
  return res.send(xiaomis);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let xiaomi = await Xiaomi.findById(req.params.id);
    if (!xiaomi)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(xiaomi); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let xiaomi = await Xiaomi.findById(req.params.id);
  xiaomi.name = req.body.name;
  xiaomi.Price = req.body.Price;
  xiaomi.picture = req.body.picture;
  xiaomi.technology= req.body.technology;
  xiaomi.Announced=req.body.Announced;
  xiaomi.Dimension=req.body.Dimension;
  xiaomi.Weight=req.body.Weight;
  xiaomi.Build=req.body.Build;
  xiaomi.Sim=req.body.Sim;
  xiaomi.Type=req.body.Type;
  xiaomi.Size=req.body.Size;
  xiaomi.Resolution=req.body.Resolution;
  xiaomi.Os=req.body.Os;
  xiaomi.Chipset=req.body.Chipset;
  xiaomi.Cpu=req.body.Cpu;
  xiaomi.Gpu=req.body.Gpu;
  xiaomi.FrontCamera=req.body.FrontCamera;
  xiaomi.CardSlot=req.body.CardSlot;
  xiaomi.Internal=req.body.Internal;
  xiaomi.Camera=req.body.Camera;
  xiaomi.Sound=req.body.Sound;
  xiaomi.Comms=req.body.Comms;
  xiaomi.Features=req.body.Features;
  xiaomi.Battery=req.body.Battery;
  xiaomi.Colors=req.body.Colors;
  xiaomi.mcamFeatures=req.body.mcamFeatures;
  xiaomi.mcamVideo=req.body.mcamVideo;
  xiaomi.ScamFeatures=req.body.ScamFeatures;
  xiaomi.ScamVideo=req.body.ScamVideo;
  xiaomi.Bluetooth=req.body.Bluetooth;
  xiaomi.NFC=req.body.NFC;
  xiaomi.Radio=req.body.Radio;
  xiaomi.GPS=req.body.GPS;
  xiaomi.Charging=req.body.Charging;
  await xiaomi.save();
  return res.send(xiaomi);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let xiaomi = await Xiaomi.findByIdAndDelete(req.params.id);
  return res.send(xiaomi);
});
//Insert a record
router.post("/", async (req, res) => {
  let xiaomi = new Xiaomi();
  xiaomi.name = req.body.name;
  xiaomi.Price = req.body.Price;
  xiaomi.picture = req.body.picture;
  xiaomi.technology= req.body.technology;
  xiaomi.Announced=req.body.Announced;
  xiaomi.Dimension=req.body.Dimension;
  xiaomi.Weight=req.body.Weight;
  xiaomi.Build=req.body.Build;
  xiaomi.Sim=req.body.Sim;
  xiaomi.Type=req.body.Type;
  xiaomi.Size=req.body.Size;
  xiaomi.Resolution=req.body.Resolution;
  xiaomi.Os=req.body.Os;
  xiaomi.Chipset=req.body.Chipset;
  xiaomi.Cpu=req.body.Cpu;
  xiaomi.Gpu=req.body.Gpu;
  xiaomi.FrontCamera=req.body.FrontCamera;
  xiaomi.CardSlot=req.body.CardSlot;
  xiaomi.Internal=req.body.Internal;
  xiaomi.Camera=req.body.Camera;
  xiaomi.Sound=req.body.Sound;
  xiaomi.Comms=req.body.Comms;
  xiaomi.Features=req.body.Features;
  xiaomi.Battery=req.body.Battery;
  xiaomi.Colors=req.body.Colors;
  xiaomi.mcamFeatures=req.body.mcamFeatures;
  xiaomi.mcamVideo=req.body.mcamVideo;
  xiaomi.ScamFeatures=req.body.ScamFeatures;
  xiaomi.ScamVideo=req.body.ScamVideo;
  xiaomi.Bluetooth=req.body.Bluetooth;
  xiaomi.NFC=req.body.NFC;
  xiaomi.Radio=req.body.Radio;
  xiaomi.GPS=req.body.GPS;
  xiaomi.Charging=req.body.Charging;
  await xiaomi.save();
  return res.send(xiaomi);
});
module.exports = router;