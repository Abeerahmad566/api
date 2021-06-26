const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {LG} = require("../../models/LG");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let lgs = await LG.find().skip(skipRecords).limit(perPage);
  return res.send(lgs);
});
//get single products
router.get("/:id",auth, async (req, res) => {
  try {
    let lg = await LG.findById(req.params.id);
    if (!lg)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(lg); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",validateProduct,auth,admin,  async (req, res) => {
  let lg = await LG.findById(req.params.id);
  lg.name = req.body.name;
  lg.Price = req.body.Price;
  lg.picture = req.body.picture;
  lg.technology= req.body.technology;
  lg.Announced=req.body.Announced;
  lg.Dimension=req.body.Dimension;
  lg.Weight=req.body.Weight;
  lg.Build=req.body.Build;
  lg.Sim=req.body.Sim;
  lg.Type=req.body.Type;
  lg .Size=req.body.Size;
  lg .Resolution=req.body.Resolution;
  lg .Os=req.body.Os;
  lg .Chipset=req.body.Chipset;
  lg .Cpu=req.body.Cpu;
  lg .Gpu=req.body.Gpu;
  lg .FrontCamera=req.body.FrontCamera;
  lg .CardSlot=req.body.CardSlot;
  lg .Internal=req.body.Internal;
  lg .Camera=req.body.Camera;
  lg .Sound=req.body.Sound;
  lg.Comms=req.body.Comms;
  lg.Features=req.body.Features;
  lg.Battery=req.body.Battery;
  lg.Colors=req.body.Colors;
  lg.mcamFeatures=req.body.mcamFeatures;
  lg.mcamVideo=req.body.mcamVideo;
  lg.ScamFeatures=req.body.ScamFeatures;
  lg.ScamVideo=req.body.ScamVideo;
  lg .Bluetooth=req.body.Bluetooth;
  lg .NFC=req.body.NFC;
  lg .Radio=req.body.Radio;
  lg .GPS=req.body.GPS;
  lg .Charging=req.body.Charging;
  await lg.save();
  return res.send(lg);
});
//delete a record
router.delete("/:id",auth,admin,async (req, res) => {
  let lg = await LG.findByIdAndDelete(req.params.id);
  return res.send(lg);
});
//Insert a record
router.post("/", validateProduct,auth,admin, async(req, res) => {
  let lg = new LG();
  lg.name = req.body.name;
  lg.Price = req.body.Price;
  lg.picture = req.body.picture;
  lg.technology= req.body.technology;
  lg.Announced=req.body.Announced;
  lg.Dimension=req.body.Dimension;
  lg.Weight=req.body.Weight;
  lg.Build=req.body.Build;
  lg.Sim=req.body.Sim;
  lg.Type=req.body.Type;
  lg .Size=req.body.Size;
  lg .Resolution=req.body.Resolution;
  lg .Os=req.body.Os;
  lg .Chipset=req.body.Chipset;
  lg .Cpu=req.body.Cpu;
  lg .Gpu=req.body.Gpu;
  lg .FrontCamera=req.body.FrontCamera;
  lg .CardSlot=req.body.CardSlot;
  lg .Internal=req.body.Internal;
  lg .Camera=req.body.Camera;
  lg .Sound=req.body.Sound;
  lg.Comms=req.body.Comms;
  lg.Features=req.body.Features;
  lg.Battery=req.body.Battery;
  lg.Colors=req.body.Colors;
  lg.mcamFeatures=req.body.mcamFeatures;
  lg.mcamVideo=req.body.mcamVideo;
  lg.ScamFeatures=req.body.ScamFeatures;
  lg.ScamVideo=req.body.ScamVideo;
  lg .Bluetooth=req.body.Bluetooth;
  lg .NFC=req.body.NFC;
  lg .Radio=req.body.Radio;
  lg .GPS=req.body.GPS;
  lg .Charging=req.body.Charging;
  await lg.save();
  return res.send(lg);
});
module.exports = router;