const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Lenovo} = require("../../models/Lenovo");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let lenovos = await Lenovo.find().skip(skipRecords).limit(perPage);
  return res.send(lenovos);
});
//get single products
router.get("/:id",async (req, res) => {
  try {
    let lenovo = await Lenovo.findById(req.params.id);
    if (!lenovo)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(lenovo); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let lenovo = await Lenovo.findById(req.params.id);
  lenovo.name = req.body.name;
  lenovo.Price = req.body.Price;
  lenovo.picture = req.body.picture;
  lenovo.technology= req.body.technology;
  lenovo.Announced=req.body.Announced;
  lenovo.Dimension=req.body.Dimension;
  lenovo.Weight=req.body.Weight;
  lenovo.Build=req.body.Build;
  lenovo.Sim=req.body.Sim;
  lenovo.Type=req.body.Type;
  lenovo .Size=req.body.Size;
  lenovo .Resolution=req.body.Resolution;
  lenovo .Os=req.body.Os;
  lenovo .Chipset=req.body.Chipset;
  lenovo .Cpu=req.body.Cpu;
  lenovo .Gpu=req.body.Gpu;
  lenovo .FrontCamera=req.body.FrontCamera;
  lenovo .CardSlot=req.body.CardSlot;
  lenovo .Internal=req.body.Internal;
  lenovo .Camera=req.body.Camera;
  lenovo .Sound=req.body.Sound;
  lenovo.Comms=req.body.Comms;
  lenovo.Features=req.body.Features;
  lenovo.Battery=req.body.Battery;
  lenovo.Colors=req.body.Colors;
  lenovo.mcamFeatures=req.body.mcamFeatures;
  lenovo.mcamVideo=req.body.mcamVideo;
  lenovo.ScamFeatures=req.body.ScamFeatures;
  lenovo.ScamVideo=req.body.ScamVideo;
  lenovo .Bluetooth=req.body.Bluetooth;
  lenovo .NFC=req.body.NFC;
  lenovo .Radio=req.body.Radio;
  lenovo .GPS=req.body.GPS;
  lenovo .Charging=req.body.Charging;
  await lenovo.save();
  return res.send(lenovo);
});
//delete a record
router.delete("/:id",async (req, res) => {
  let lenovo = await Lenovo.findByIdAndDelete(req.params.id);
  return res.send(lenovo);
});
//Insert a record
router.post("/", async (req, res) => {
  let lenovo = new Lenovo();
  lenovo.name = req.body.name;
  lenovo.Price = req.body.Price;
  lenovo.picture = req.body.picture;
  lenovo.technology= req.body.technology;
  lenovo.Announced=req.body.Announced;
  lenovo.Dimension=req.body.Dimension;
  lenovo.Weight=req.body.Weight;
  lenovo.Build=req.body.Build;
  lenovo.Sim=req.body.Sim;
  lenovo.Type=req.body.Type;
  lenovo .Size=req.body.Size;
  lenovo .Resolution=req.body.Resolution;
  lenovo .Os=req.body.Os;
  lenovo .Chipset=req.body.Chipset;
  lenovo .Cpu=req.body.Cpu;
  lenovo .Gpu=req.body.Gpu;
  lenovo .FrontCamera=req.body.FrontCamera;
  lenovo .CardSlot=req.body.CardSlot;
  lenovo .Internal=req.body.Internal;
  lenovo .Camera=req.body.Camera;
  lenovo .Sound=req.body.Sound;
  lenovo.Comms=req.body.Comms;
  lenovo.Features=req.body.Features;
  lenovo.Battery=req.body.Battery;
  lenovo.Colors=req.body.Colors;
  lenovo.mcamFeatures=req.body.mcamFeatures;
  lenovo.mcamVideo=req.body.mcamVideo;
  lenovo.ScamFeatures=req.body.ScamFeatures;
  lenovo.ScamVideo=req.body.ScamVideo;
  lenovo .Bluetooth=req.body.Bluetooth;
  lenovo .NFC=req.body.NFC;
  lenovo .Radio=req.body.Radio;
  lenovo .GPS=req.body.GPS;
  lenovo .Charging=req.body.Charging;
  await lenovo.save();
  return res.send(lenovo);
});
module.exports = router;