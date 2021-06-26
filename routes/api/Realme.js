const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Realme} = require("../../models/Realme");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let realmes = await Realme.find().skip(skipRecords).limit(perPage);
  return res.send(realmes);
});
//get single products
router.get("/:id",auth, async (req, res) => {
  try {
    let realme = await Realme.findById(req.params.id);
    if (!realme)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(realme); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",validateProduct,auth,admin,  async (req, res) => {
  let realme = await Realme.findById(req.params.id);
  realme.name = req.body.name;
  realme.Price = req.body.Price;
  realme.picture = req.body.picture;
  realme.technology= req.body.technology;
  realme.Announced=req.body.Announced;
  realme.Dimension=req.body.Dimension;
  realme.Weight=req.body.Weight;
  realme.Build=req.body.Build;
  realme.Sim=req.body.Sim;
  realme.Type=req.body.Type;
  realme .Size=req.body.Size;
  realme .Resolution=req.body.Resolution;
  realme .Os=req.body.Os;
  realme .Chipset=req.body.Chipset;
  realme .Cpu=req.body.Cpu;
  realme .Gpu=req.body.Gpu;
  realme .FrontCamera=req.body.FrontCamera;
  realme .CardSlot=req.body.CardSlot;
  realme .Internal=req.body.Internal;
  realme .Camera=req.body.Camera;
  realme .Sound=req.body.Sound;
  realme.Comms=req.body.Comms;
  realme.Features=req.body.Features;
  realme.Battery=req.body.Battery;
  realme.Colors=req.body.Colors;
  realme.mcamFeatures=req.body.mcamFeatures;
  realme.mcamVideo=req.body.mcamVideo;
  realme.ScamFeatures=req.body.ScamFeatures;
  realme.ScamVideo=req.body.ScamVideo;
  realme .Bluetooth=req.body.Bluetooth;
  realme .NFC=req.body.NFC;
  realme .Radio=req.body.Radio;
  realme .GPS=req.body.GPS;
  realme .Charging=req.body.Charging;
  await realme.save();
  return res.send(realme);
});
//delete a record
router.delete("/:id",auth,admin, async (req, res) => {
  let realme = await Realme.findByIdAndDelete(req.params.id);
  return res.send(realme);
});
//Insert a record
router.post("/",validateProduct,auth,admin, async (req, res) => {
  let realme = new Realme();
  realme.name = req.body.name;
  realme.Price = req.body.Price;
  realme.picture = req.body.picture;
  realme.technology= req.body.technology;
  realme.Announced=req.body.Announced;
  realme.Dimension=req.body.Dimension;
  realme.Weight=req.body.Weight;
  realme.Build=req.body.Build;
  realme.Sim=req.body.Sim;
  realme.Type=req.body.Type;
  realme .Size=req.body.Size;
  realme .Resolution=req.body.Resolution;
  realme .Os=req.body.Os;
  realme .Chipset=req.body.Chipset;
  realme .Cpu=req.body.Cpu;
  realme .Gpu=req.body.Gpu;
  realme .FrontCamera=req.body.FrontCamera;
  realme .CardSlot=req.body.CardSlot;
  realme .Internal=req.body.Internal;
  realme .Camera=req.body.Camera;
  realme .Sound=req.body.Sound;
  realme.Comms=req.body.Comms;
  realme.Features=req.body.Features;
  realme.Battery=req.body.Battery;
  realme.Colors=req.body.Colors;
  realme.mcamFeatures=req.body.mcamFeatures;
  realme.mcamVideo=req.body.mcamVideo;
  realme.ScamFeatures=req.body.ScamFeatures;
  realme.ScamVideo=req.body.ScamVideo;
  realme .Bluetooth=req.body.Bluetooth;
  realme .NFC=req.body.NFC;
  realme .Radio=req.body.Radio;
  realme .GPS=req.body.GPS;
  realme .Charging=req.body.Charging;
  await realme.save();
  return res.send(realme);
});
module.exports = router;