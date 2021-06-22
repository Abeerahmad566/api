const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const { Vivo } = require("../../models/Vivo");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let vivos = await Vivo.find().skip(skipRecords).limit(perPage);
  return res.send(vivos);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let vivo = await Vivo.findById(req.params.id);
    if (!vivo)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(vivo); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let vivo = await Vivo.findById(req.params.id);
  vivo.name = req.body.name;
  vivo.Price = req.body.Price;
  vivo.picture = req.body.picture;
  vivo.technology= req.body.technology;
  vivo.Announced=req.body.Announced;
  vivo.Dimension=req.body.Dimension;
  vivo.Weight=req.body.Weight;
  vivo.Build=req.body.Build;
  vivo.Sim=req.body.Sim;
  vivo.Type=req.body.Type;
  vivo .Size=req.body.Size;
  vivo .Resolution=req.body.Resolution;
  vivo .Os=req.body.Os;
  vivo .Chipset=req.body.Chipset;
  vivo .Cpu=req.body.Cpu;
  vivo .Gpu=req.body.Gpu;
  vivo .FrontCamera=req.body.FrontCamera;
  vivo .CardSlot=req.body.CardSlot;
  vivo .Internal=req.body.Internal;
  vivo .Camera=req.body.Camera;
  vivo .Sound=req.body.Sound;
  vivo.Comms=req.body.Comms;
  vivo.Features=req.body.Features;
  vivo.Battery=req.body.Battery;
  vivo.Colors=req.body.Colors;
  vivo.mcamFeatures=req.body.mcamFeatures;
  vivo.mcamVideo=req.body.mcamVideo;
  vivo.ScamFeatures=req.body.ScamFeatures;
  vivo.ScamVideo=req.body.ScamVideo;
  vivo .Bluetooth=req.body.Bluetooth;
  vivo .NFC=req.body.NFC;
  vivo .Radio=req.body.Radio;
  vivo .GPS=req.body.GPS;
  vivo .Charging=req.body.Charging;
  await vivo.save();
  return res.send(vivo);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let vivo = await Vivo.findByIdAndDelete(req.params.id);
  return res.send(vivo);
});
//Insert a record
router.post("/", async (req, res) => {
  let vivo = new Vivo();
  vivo.name = req.body.name;
  vivo.Price = req.body.Price;
  vivo.picture = req.body.picture;
  vivo.technology= req.body.technology;
  vivo.Announced=req.body.Announced;
  vivo.Dimension=req.body.Dimension;
  vivo.Weight=req.body.Weight;
  vivo.Build=req.body.Build;
  vivo.Sim=req.body.Sim;
  vivo.Type=req.body.Type;
  vivo .Size=req.body.Size;
  vivo .Resolution=req.body.Resolution;
  vivo .Os=req.body.Os;
  vivo .Chipset=req.body.Chipset;
  vivo .Cpu=req.body.Cpu;
  vivo .Gpu=req.body.Gpu;
  vivo .FrontCamera=req.body.FrontCamera;
  vivo .CardSlot=req.body.CardSlot;
  vivo .Internal=req.body.Internal;
  vivo .Camera=req.body.Camera;
  vivo .Sound=req.body.Sound;
  vivo.Comms=req.body.Comms;
  vivo.Features=req.body.Features;
  vivo.Battery=req.body.Battery;
  vivo.Colors=req.body.Colors;
  vivo.mcamFeatures=req.body.mcamFeatures;
  vivo.mcamVideo=req.body.mcamVideo;
  vivo.ScamFeatures=req.body.ScamFeatures;
  vivo.ScamVideo=req.body.ScamVideo;
  vivo .Bluetooth=req.body.Bluetooth;
  vivo .NFC=req.body.NFC;
  vivo .Radio=req.body.Radio;
  vivo .GPS=req.body.GPS;
  vivo .Charging=req.body.Charging;
  await vivo.save();
  return res.send(vivo);
});
module.exports = router;