const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {ZTE} = require("../../models/ZTE");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let ztes = await ZTE.find().skip(skipRecords).limit(perPage);
  return res.send(ztes);
});
//get single products
router.get("/:id",auth, async (req, res) => {
  try {
    let zte = await ZTE.findById(req.params.id);
    if (!zte)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(zte); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id", validateProduct,auth,admin, async (req, res) => {
  let zte = await ZTE.findById(req.params.id);
  zte.name = req.body.name;
  zte.Price = req.body.Price;
  zte.picture = req.body.picture;
  zte.technology= req.body.technology;
  zte.Announced=req.body.Announced;
  zte.Dimension=req.body.Dimension;
  zte.Weight=req.body.Weight;
  zte.Build=req.body.Build;
  zte.Sim=req.body.Sim;
  zte.Type=req.body.Type;
  zte.Size=req.body.Size;
  zte.Resolution=req.body.Resolution;
  zte.Os=req.body.Os;
  zte.Chipset=req.body.Chipset;
  zte.Cpu=req.body.Cpu;
  zte.Gpu=req.body.Gpu;
  zte.FrontCamera=req.body.FrontCamera;
  zte.CardSlot=req.body.CardSlot;
  zte.Internal=req.body.Internal;
  zte.Camera=req.body.Camera;
  zte.Sound=req.body.Sound;
  zte.Comms=req.body.Comms;
  zte.Features=req.body.Features;
  zte.Battery=req.body.Battery;
  zte.Colors=req.body.Colors;
  zte.mcamFeatures=req.body.mcamFeatures;
  zte.mcamVideo=req.body.mcamVideo;
  zte.ScamFeatures=req.body.ScamFeatures;
  zte.ScamVideo=req.body.ScamVideo;
  zte.Bluetooth=req.body.Bluetooth;
  zte.NFC=req.body.NFC;
  zte.Radio=req.body.Radio;
  zte.GPS=req.body.GPS;
  zte.Charging=req.body.Charging;
  await zte.save();
  return res.send(zte);
});
//delete a record
router.delete("/:id",auth,admin,async (req, res) => {
  let zte = await ZTE.findByIdAndDelete(req.params.id);
  return res.send(zte);
});
//Insert a record
router.post("/",validateProduct,auth,admin, async (req, res) => {
  let zte = new ZTE();
  zte.name = req.body.name;
  zte.Price = req.body.Price;
  zte.picture = req.body.picture;
  zte.technology= req.body.technology;
  zte.Announced=req.body.Announced;
  zte.Dimension=req.body.Dimension;
  zte.Weight=req.body.Weight;
  zte.Build=req.body.Build;
  zte.Sim=req.body.Sim;
  zte.Type=req.body.Type;
  zte.Size=req.body.Size;
  zte.Resolution=req.body.Resolution;
  zte.Os=req.body.Os;
  zte.Chipset=req.body.Chipset;
  zte.Cpu=req.body.Cpu;
  zte.Gpu=req.body.Gpu;
  zte.FrontCamera=req.body.FrontCamera;
  zte.CardSlot=req.body.CardSlot;
  zte.Internal=req.body.Internal;
  zte.Camera=req.body.Camera;
  zte.Sound=req.body.Sound;
  zte.Comms=req.body.Comms;
  zte.Features=req.body.Features;
  zte.Battery=req.body.Battery;
  zte.Colors=req.body.Colors;
  zte.mcamFeatures=req.body.mcamFeatures;
  zte.mcamVideo=req.body.mcamVideo;
  zte.ScamFeatures=req.body.ScamFeatures;
  zte.ScamVideo=req.body.ScamVideo;
  zte.Bluetooth=req.body.Bluetooth;
  zte.NFC=req.body.NFC;
  zte.Radio=req.body.Radio;
  zte.GPS=req.body.GPS;
  zte.Charging=req.body.Charging;
  await zte.save();
  return res.send(zte);
});
module.exports = router;