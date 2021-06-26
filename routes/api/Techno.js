const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Techno} = require("../../models/Techno");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let technos = await Techno.find().skip(skipRecords).limit(perPage);
  return res.send(technos);
});
//get single products
router.get("/:id",auth, async (req, res) => {
  try {
    let techno = await Techno.findById(req.params.id);
    if (!techno)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(techno); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",validateProduct,auth,admin,  async (req, res) => {
  let techno = await Techno.findById(req.params.id);
  techno.name = req.body.name;
  techno.Price = req.body.Price;
  techno.picture = req.body.picture;
  techno.technology= req.body.technology;
  techno.Announced=req.body.Announced;
  techno.Dimension=req.body.Dimension;
  techno.Weight=req.body.Weight;
  techno.Build=req.body.Build;
  techno.Sim=req.body.Sim;
  techno.Type=req.body.Type;
  techno .Size=req.body.Size;
  techno .Resolution=req.body.Resolution;
  techno .Os=req.body.Os;
  techno .Chipset=req.body.Chipset;
  techno .Cpu=req.body.Cpu;
  techno .Gpu=req.body.Gpu;
  techno .FrontCamera=req.body.FrontCamera;
  techno .CardSlot=req.body.CardSlot;
  techno .Internal=req.body.Internal;
  techno .Camera=req.body.Camera;
  techno .Sound=req.body.Sound;
  techno.Comms=req.body.Comms;
  techno.Features=req.body.Features;
  techno.Battery=req.body.Battery;
  techno.Colors=req.body.Colors;
  techno.mcamFeatures=req.body.mcamFeatures;
  techno.mcamVideo=req.body.mcamVideo;
  techno.ScamFeatures=req.body.ScamFeatures;
  techno.ScamVideo=req.body.ScamVideo;
  techno .Bluetooth=req.body.Bluetooth;
  techno .NFC=req.body.NFC;
  techno .Radio=req.body.Radio;
  techno .GPS=req.body.GPS;
  techno .Charging=req.body.Charging;
  await techno.save();
  return res.send(techno);
});
//delete a record
router.delete("/:id",auth,admin, async (req, res) => {
  let techno = await Techno.findByIdAndDelete(req.params.id);
  return res.send(techno);
});
//Insert a record
router.post("/",validateProduct,auth,admin, async (req, res) => {
  let techno = new Techno();
  techno.name = req.body.name;
  techno.Price = req.body.Price;
  techno.picture = req.body.picture;
  techno.technology= req.body.technology;
  techno.Announced=req.body.Announced;
  techno.Dimension=req.body.Dimension;
  techno.Weight=req.body.Weight;
  techno.Build=req.body.Build;
  techno.Sim=req.body.Sim;
  techno.Type=req.body.Type;
  techno .Size=req.body.Size;
  techno .Resolution=req.body.Resolution;
  techno .Os=req.body.Os;
  techno .Chipset=req.body.Chipset;
  techno .Cpu=req.body.Cpu;
  techno .Gpu=req.body.Gpu;
  techno .FrontCamera=req.body.FrontCamera;
  techno .CardSlot=req.body.CardSlot;
  techno .Internal=req.body.Internal;
  techno .Camera=req.body.Camera;
  techno .Sound=req.body.Sound;
  techno.Comms=req.body.Comms;
  techno.Features=req.body.Features;
  techno.Battery=req.body.Battery;
  techno.Colors=req.body.Colors;
  techno.mcamFeatures=req.body.mcamFeatures;
  techno.mcamVideo=req.body.mcamVideo;
  techno.ScamFeatures=req.body.ScamFeatures;
  techno.ScamVideo=req.body.ScamVideo;
  techno .Bluetooth=req.body.Bluetooth;
  techno .NFC=req.body.NFC;
  techno .Radio=req.body.Radio;
  techno .GPS=req.body.GPS;
  techno .Charging=req.body.Charging;
  await techno.save();
  return res.send(techno);
});
module.exports = router;