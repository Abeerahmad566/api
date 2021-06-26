const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Oppo} = require("../../models/Oppo");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let oppos = await Oppo.find().skip(skipRecords).limit(perPage);
  return res.send(oppos);
});
//get single products
router.get("/:id",auth, async (req, res) => {
  try {
    let oppo = await Oppo.findById(req.params.id);
    if (!oppo)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(oppo); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",validateProduct,auth,admin,  async (req, res) => {
  let oppo = await Oppo.findById(req.params.id);
  oppo.name = req.body.name;
  oppo.Price = req.body.Price;
  oppo.picture = req.body.picture;
  oppo.technology= req.body.technology;
  oppo.Announced=req.body.Announced;
  oppo.Dimension=req.body.Dimension;
  oppo.Weight=req.body.Weight;
  oppo.Build=req.body.Build;
  oppo.Sim=req.body.Sim;
  oppo.Type=req.body.Type;
  oppo .Size=req.body.Size;
  oppo .Resolution=req.body.Resolution;
  oppo .Os=req.body.Os;
  oppo .Chipset=req.body.Chipset;
  oppo .Cpu=req.body.Cpu;
  oppo .Gpu=req.body.Gpu;
  oppo .FrontCamera=req.body.FrontCamera;
  oppo .CardSlot=req.body.CardSlot;
  oppo .Internal=req.body.Internal;
  oppo .Camera=req.body.Camera;
  oppo .Sound=req.body.Sound;
  oppo.Comms=req.body.Comms;
  oppo.Features=req.body.Features;
  oppo.Battery=req.body.Battery;
  oppo.Colors=req.body.Colors;
  oppo.mcamFeatures=req.body.mcamFeatures;
  oppo.mcamVideo=req.body.mcamVideo;
  oppo.ScamFeatures=req.body.ScamFeatures;
  oppo.ScamVideo=req.body.ScamVideo;
  oppo .Bluetooth=req.body.Bluetooth;
  oppo .NFC=req.body.NFC;
  oppo .Radio=req.body.Radio;
  oppo .GPS=req.body.GPS;
  oppo .Charging=req.body.Charging;
  await oppo.save();
  return res.send(oppo);
});
//delete a record
router.delete("/:id",auth,admin, async (req, res) => {
  let oppo = await Oppo.findByIdAndDelete(req.params.id);
  return res.send(oppo);
});
//Insert a record
router.post("/",validateProduct,auth,admin, async (req, res) => {
  let oppo = new Oppo();
  oppo.name = req.body.name;
  oppo.Price = req.body.Price;
  oppo.picture = req.body.picture;
  oppo.technology= req.body.technology;
  oppo.Announced=req.body.Announced;
  oppo.Dimension=req.body.Dimension;
  oppo.Weight=req.body.Weight;
  oppo.Build=req.body.Build;
  oppo.Sim=req.body.Sim;
  oppo.Type=req.body.Type;
  oppo .Size=req.body.Size;
  oppo .Resolution=req.body.Resolution;
  oppo .Os=req.body.Os;
  oppo .Chipset=req.body.Chipset;
  oppo .Cpu=req.body.Cpu;
  oppo .Gpu=req.body.Gpu;
  oppo .FrontCamera=req.body.FrontCamera;
  oppo .CardSlot=req.body.CardSlot;
  oppo .Internal=req.body.Internal;
  oppo .Camera=req.body.Camera;
  oppo .Sound=req.body.Sound;
  oppo.Comms=req.body.Comms;
  oppo.Features=req.body.Features;
  oppo.Battery=req.body.Battery;
  oppo.Colors=req.body.Colors;
  oppo.mcamFeatures=req.body.mcamFeatures;
  oppo.mcamVideo=req.body.mcamVideo;
  oppo.ScamFeatures=req.body.ScamFeatures;
  oppo.ScamVideo=req.body.ScamVideo;
  oppo .Bluetooth=req.body.Bluetooth;
  oppo .NFC=req.body.NFC;
  oppo .Radio=req.body.Radio;
  oppo .GPS=req.body.GPS;
  oppo .Charging=req.body.Charging;
  await oppo.save();
  return res.send(oppo);
});
module.exports = router;