const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Apple} = require("../../models/Apple");
//get products
router.get("/apple",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let apples = await Apple.find().skip(skipRecords).limit(perPage);
  return res.send(apples);
});
//get single products
router.get("/apple/:id" ,async (req, res) => {
  try {
    let apple = await Apple.findById(req.params.id);
    if (!apple)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(apple); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/apple/:id",admin,async (req, res) => {
  let apple = await Apple.findById(req.params.id);
  apple.name = req.body.name;
  apple.Price = req.body.Price;
  apple.picture = req.body.picture;
  apple.technology= req.body.technology;
  apple.Announced=req.body.Announced;
  apple.Dimension=req.body.Dimension;
  apple.Weight=req.body.Weight;
  apple.Build=req.body.Build;
  apple.Sim=req.body.Sim;
  apple.Type=req.body.Type;
  apple .Size=req.body.Size;
  apple .Resolution=req.body.Resolution;
  apple .Os=req.body.Os;
  apple .Chipset=req.body.Chipset;
  apple .Cpu=req.body.Cpu;
  apple .Gpu=req.body.Gpu;
  apple .FrontCamera=req.body.FrontCamera;
  apple .CardSlot=req.body.CardSlot;
  apple.Internal=req.body.Internal;
  apple.Camera=req.body.Camera;
  apple.Sound=req.body.Sound;
  apple.Comms=req.body.Comms;
  apple.Features=req.body.Features;
  apple.Battery=req.body.Battery;
  apple.Colors=req.body.Colors;
  apple.mcamFeatures=req.body.mcamFeatures;
  apple.mcamVideo=req.body.mcamVideo;
  apple.ScamFeatures=req.body.ScamFeatures;
  apple.ScamVideo=req.body.ScamVideo;
  apple.Bluetooth=req.body.Bluetooth;
  apple.NFC=req.body.NFC;
  apple.Radio=req.body.Radio;
  apple.GPS=req.body.GPS;
  apple.Charging=req.body.Charging;

  await apple.save();
  return res.send(apple);
});
//delete a record
router.delete("/apple/:id",async (req, res) => {
  let apple = await Apple.findByIdAndDelete(req.params.id);
  return res.send(apple);
});
//Insert a record
router.post("/apple", async (req, res) => {
  let apple = new Apple();
  apple.name = req.body.name;
  apple.Price = req.body.Price;
  apple.picture = req.body.picture;
  apple.technology= req.body.technology;
  apple.Announced=req.body.Announced;
  apple.Dimension=req.body.Dimension;
  apple.Weight=req.body.Weight;
  apple.Build=req.body.Build;
  apple.Sim=req.body.Sim;
  apple.Type=req.body.Type;
  apple .Size=req.body.Size;
  apple .Resolution=req.body.Resolution;
  apple .Os=req.body.Os;
  apple .Chipset=req.body.Chipset;
  apple .Cpu=req.body.Cpu;
  apple .Gpu=req.body.Gpu;
  apple .FrontCamera=req.body.FrontCamera;
  apple .CardSlot=req.body.CardSlot;
  apple.Internal=req.body.Internal;
  apple.Camera=req.body.Camera;
  apple.Sound=req.body.Sound;
  apple.Comms=req.body.Comms;
  apple.Features=req.body.Features;
  apple.Battery=req.body.Battery;
  apple.Colors=req.body.Colors;
  apple.mcamFeatures=req.body.mcamFeatures;
  apple.mcamVideo=req.body.mcamVideo;
  apple.ScamFeatures=req.body.ScamFeatures;
  apple.ScamVideo=req.body.ScamVideo;
  apple.Bluetooth=req.body.Bluetooth;
  apple.NFC=req.body.NFC;
  apple.Radio=req.body.Radio;
  apple.GPS=req.body.GPS;
  apple.Charging=req.body.Charging;
  await apple.save();
  return res.send(apple);
});

const {Asus} = require("../../models/Asus");
//get products
router.get("/asus",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let asuss = await Asus.find().skip(skipRecords).limit(perPage);
  return res.send(asuss);
});
//get single products
router.get("/asus/:id",async (req, res) => {
  try {
    let asus = await Asus.findById(req.params.id);
    if (!asus)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(asus); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/asus/:id",async (req, res) => {
  let asus = await Asus.findById(req.params.id);
  asus.name = req.body.name;
  asus.Price = req.body.Price;
  asus.picture = req.body.picture;
  asus.technology= req.body.technology;
  asus.Announced=req.body.Announced;
  asus.Dimension=req.body.Dimension;
  asus.Weight=req.body.Weight;
  asus.Build=req.body.Build;
  asus.Sim=req.body.Sim;
  asus.Type=req.body.Type;
  asus.Size=req.body.Size;
  asus.Resolution=req.body.Resolution;
  asus.Os=req.body.Os;
  asus.Chipset=req.body.Chipset;
  asus .Cpu=req.body.Cpu;
  asus .Gpu=req.body.Gpu;
  asus .FrontCamera=req.body.FrontCamera;
  asus .CardSlot=req.body.CardSlot;
  asus .Internal=req.body.Internal;
  asus .Camera=req.body.Camera;
  asus .Sound=req.body.Sound;
  asus .Comms=req.body.Comms;
  asus .Features=req.body.Features;
  asus .Battery=req.body.Battery;
  asus .Colors=req.body.Colors;
  asus .mcamFeatures=req.body.mcamFeatures;
  asus .mcamVideo=req.body.mcamVideo;
  asus .ScamFeatures=req.body.ScamFeatures;
  asus .ScamVideo=req.body.ScamVideo;
  asus .Bluetooth=req.body.Bluetooth;
  asus .NFC=req.body.NFC;
  asus .Radio=req.body.Radio;
  asus .GPS=req.body.GPS;
  asus .Charging=req.body.Charging;
  await asus.save();
  return res.send(asus);
});
//delete a record
router.delete("/asus/:id", async (req, res) => {
  let asus = await Asus.findByIdAndDelete(req.params.id);
  return res.send(asus);
});
//Insert a record
router.post("/asus",async (req, res) => {
  let asus = new Asus();
  asus.name = req.body.name;
  asus.Price = req.body.Price;
  asus.picture = req.body.picture;
  asus.technology= req.body.technology;
  asus.Announced=req.body.Announced;
  asus.Dimension=req.body.Dimension;
  asus.Weight=req.body.Weight;
  asus.Build=req.body.Build;
  asus.Sim=req.body.Sim;
  asus.Type=req.body.Type;
  asus.Size=req.body.Size;
  asus.Resolution=req.body.Resolution;
  asus.Os=req.body.Os;
  asus.Chipset=req.body.Chipset;
  asus .Cpu=req.body.Cpu;
  asus .Gpu=req.body.Gpu;
  asus .FrontCamera=req.body.FrontCamera;
  asus .CardSlot=req.body.CardSlot;
  asus .Internal=req.body.Internal;
  asus .Camera=req.body.Camera;
  asus .Sound=req.body.Sound;
  asus .Comms=req.body.Comms;
  asus .Features=req.body.Features;
  asus .Battery=req.body.Battery;
  asus .Colors=req.body.Colors;
  asus .mcamFeatures=req.body.mcamFeatures;
  asus .mcamVideo=req.body.mcamVideo;
  asus .ScamFeatures=req.body.ScamFeatures;
  asus .ScamVideo=req.body.ScamVideo;
  asus .Bluetooth=req.body.Bluetooth;
  asus .NFC=req.body.NFC;
  asus .Radio=req.body.Radio;
  asus .GPS=req.body.GPS;
  asus .Charging=req.body.Charging;
  await asus.save();
  return res.send(asus);
});

const {Google} = require("../../models/Google");
//get products
router.get("/google",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let googles = await Google.find().skip(skipRecords).limit(perPage);
  return res.send(googles);
});
//get single products
router.get("/google/:id",async (req, res) => {
  try {
    let google = await Google.findById(req.params.id);
    if (!google)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(google); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/google/:id",  async (req, res) => {
  let google = await Google.findById(req.params.id);
  google.name = req.body.name;
  google.Price = req.body.Price;
  google.picture = req.body.picture;
  google.technology= req.body.technology;
  google.Announced=req.body.Announced;
  google.Dimension=req.body.Dimension;
  google .Weight=req.body.Weight;
  google .Build=req.body.Build;
  google .Sim=req.body.Sim;
  google .Type=req.body.Type;
  google .Size=req.body.Size;
  google .Resolution=req.body.Resolution;
  google .Os=req.body.Os;
  google .Chipset=req.body.Chipset;
  google .Cpu=req.body.Cpu;
  google .Gpu=req.body.Gpu;
  google .FrontCamera=req.body.FrontCamera;
  google .CardSlot=req.body.CardSlot;
  google .Internal=req.body.Internal;
  google .Camera=req.body.Camera;
  google .Sound=req.body.Sound;
  google .Comms=req.body.Comms;
  google.Features=req.body.Features;
  google .Battery=req.body.Battery;
  google .Colors=req.body.Colors;
  google .mcamFeatures=req.body.mcamFeatures;
  google.mcamVideo=req.body.mcamVideo;
  google.ScamFeatures=req.body.ScamFeatures;
  google.ScamVideo=req.body.ScamVideo;
  google .Bluetooth=req.body.Bluetooth;
  google.NFC=req.body.NFC;
  google.Radio=req.body.Radio;
  google.GPS=req.body.GPS;
  google.Charging=req.body.Charging;
  await google.save();
  return res.send(google);
});
//delete a record
router.delete("/google/:id",async (req, res) => {
  let google = await Google.findByIdAndDelete(req.params.id);
  return res.send(google);
});
//Insert a record
router.post("/google", async (req, res) => {
  let google = new Google();
  google.name = req.body.name;
  google.Price = req.body.Price;
  google.picture = req.body.picture;
  google.technology= req.body.technology;
  google.Announced=req.body.Announced;
  google.Dimension=req.body.Dimension;
  google .Weight=req.body.Weight;
  google .Build=req.body.Build;
  google .Sim=req.body.Sim;
  google .Type=req.body.Type;
  google .Size=req.body.Size;
  google .Resolution=req.body.Resolution;
  google .Os=req.body.Os;
  google .Chipset=req.body.Chipset;
  google .Cpu=req.body.Cpu;
  google .Gpu=req.body.Gpu;
  google .FrontCamera=req.body.FrontCamera;
  google .CardSlot=req.body.CardSlot;
  google .Internal=req.body.Internal;
  google .Camera=req.body.Camera;
  google .Sound=req.body.Sound;
  google .Comms=req.body.Comms;
  google.Features=req.body.Features;
  google .Battery=req.body.Battery;
  google .Colors=req.body.Colors;
  google .mcamFeatures=req.body.mcamFeatures;
  google.mcamVideo=req.body.mcamVideo;
  google.ScamFeatures=req.body.ScamFeatures;
  google.ScamVideo=req.body.ScamVideo;
  google .Bluetooth=req.body.Bluetooth;
  google.NFC=req.body.NFC;
  google.Radio=req.body.Radio;
  google.GPS=req.body.GPS;
  google.Charging=req.body.Charging;
  await google.save();
  return res.send(google);
});

const {HTC} = require("../../models/HTC");
//get products
router.get("/htc",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let htcs = await HTC.find().skip(skipRecords).limit(perPage);
  return res.send(htcs);
});
//get single products
router.get("/htc/:id",async (req, res) => {
  try {
    let htc = await HTC.findById(req.params.id);
    if (!htc)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(htc); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/htc/:id",  async (req, res) => {
  let htc = await HTC.findById(req.params.id);
  htc.name = req.body.name;
  htc.Price = req.body.Price;
  htc.picture = req.body.picture;
  htc.technology= req.body.technology;
  htc.Announced=req.body.Announced;
  htc.Dimension=req.body.Dimension;
  htc.Weight=req.body.Weight;
  htc.Build=req.body.Build;
  htc .Sim=req.body.Sim;
  htc .Type=req.body.Type;
  htc .Size=req.body.Size;
  htc .Resolution=req.body.Resolution;
  htc .Os=req.body.Os;
  htc .Chipset=req.body.Chipset;
  htc .Cpu=req.body.Cpu;
  htc .Gpu=req.body.Gpu;
  htc .FrontCamera=req.body.FrontCamera;
  htc .CardSlot=req.body.CardSlot;
  htc .Internal=req.body.Internal;
  htc .Camera=req.body.Camera;
  htc .Sound=req.body.Sound;
  htc .Comms=req.body.Comms;
  htc .Features=req.body.Features;
  htc .Battery=req.body.Battery;
  htc .Colors=req.body.Colors;
  htc .mcamFeatures=req.body.mcamFeatures;
  htc .mcamVideo=req.body.mcamVideo;
  htc .ScamFeatures=req.body.ScamFeatures;
  htc .ScamVideo=req.body.ScamVideo;
  htc .Bluetooth=req.body.Bluetooth;
  htc .NFC=req.body.NFC;
  htc .Radio=req.body.Radio;
  htc .GPS=req.body.GPS;
  htc .Charging=req.body.Charging;
  await htc.save();
  return res.send(htc);
});
//delete a record
router.delete("/htc/:id",async (req, res) => {
  let htc = await HTC.findByIdAndDelete(req.params.id);
  return res.send(htc);
});
//Insert a record
router.post("/htc", async (req, res) => {
  let htc = new HTC();
  htc.name = req.body.name;
  htc.Price = req.body.Price;
  htc.picture = req.body.picture;
  htc.technology= req.body.technology;
  htc.Announced=req.body.Announced;
  htc.Dimension=req.body.Dimension;
  htc.Weight=req.body.Weight;
  htc.Build=req.body.Build;
  htc .Sim=req.body.Sim;
  htc .Type=req.body.Type;
  htc .Size=req.body.Size;
  htc .Resolution=req.body.Resolution;
  htc .Os=req.body.Os;
  htc .Chipset=req.body.Chipset;
  htc .Cpu=req.body.Cpu;
  htc .Gpu=req.body.Gpu;
  htc .FrontCamera=req.body.FrontCamera;
  htc .CardSlot=req.body.CardSlot;
  htc .Internal=req.body.Internal;
  htc .Camera=req.body.Camera;
  htc .Sound=req.body.Sound;
  htc .Comms=req.body.Comms;
  htc .Features=req.body.Features;
  htc .Battery=req.body.Battery;
  htc .Colors=req.body.Colors;
  htc .mcamFeatures=req.body.mcamFeatures;
  htc .mcamVideo=req.body.mcamVideo;
  htc .ScamFeatures=req.body.ScamFeatures;
  htc .ScamVideo=req.body.ScamVideo;
  htc .Bluetooth=req.body.Bluetooth;
  htc .NFC=req.body.NFC;
  htc .Radio=req.body.Radio;
  htc .GPS=req.body.GPS;
  htc .Charging=req.body.Charging;
  await htc.save();
  return res.send(htc);
});
const {Huawei} = require("../../models/Huawei");
//get products
router.get("/huawei",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let huaweis = await Huawei.find().skip(skipRecords).limit(perPage);
  return res.send(huaweis);
});
//get single products
router.get("/huawei/:id",async (req, res) => {
  try {
    let huawei = await Huawei.findById(req.params.id);
    if (!huawei)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(huawei); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/huawei/:id",  async (req, res) => {
  let huawei = await Huawei.findById(req.params.id);
  huawei.name = req.body.name;
  huawei.Price = req.body.Price;
  huawei.picture = req.body.picture;
  huawei.technology= req.body.technology;
  huawei.Announced=req.body.Announced;
  huawei.Dimension=req.body.Dimension;
  huawei.Weight=req.body.Weight;
  huawei.Build=req.body.Build;
  huawei.Sim=req.body.Sim;
  huawei.Type=req.body.Type;
  huawei.Size=req.body.Size;
  huawei.Resolution=req.body.Resolution;
  huawei.Os=req.body.Os;
  huawei.Chipset=req.body.Chipset;
  huawei.Cpu=req.body.Cpu;
  huawei.Gpu=req.body.Gpu;
  huawei.FrontCamera=req.body.FrontCamera;
  huawei.CardSlot=req.body.CardSlot;
  huawei.Internal=req.body.Internal;
  huawei.Camera=req.body.Camera;
  huawei.Sound=req.body.Sound;
  huawei.Comms=req.body.Comms;
  huawei.Features=req.body.Features;
  huawei.Battery=req.body.Battery;
  huawei .Colors=req.body.Colors;
  huawei .mcamFeatures=req.body.mcamFeatures;
  huawei .mcamVideo=req.body.mcamVideo;
  huawei .ScamFeatures=req.body.ScamFeatures;
  huawei .ScamVideo=req.body.ScamVideo;
  huawei .Bluetooth=req.body.Bluetooth;
  huawei .NFC=req.body.NFC;
  huawei .Radio=req.body.Radio;
  huawei .GPS=req.body.GPS;
  huawei .Charging=req.body.Charging;
  await huawei.save();
  return res.send(huawei);
});
//delete a record
router.delete("/huawei/:id",async (req, res) => {
  let huawei = await Huawei.findByIdAndDelete(req.params.id);
  return res.send(huawei);
});
//Insert a record
router.post("/huawei", async (req, res) => {
  let huawei = new Huawei();
  huawei.name = req.body.name;
  huawei.Price = req.body.Price;
  huawei.picture = req.body.picture;
  huawei.technology= req.body.technology;
  huawei.Announced=req.body.Announced;
  huawei.Dimension=req.body.Dimension;
  huawei.Weight=req.body.Weight;
  huawei.Build=req.body.Build;
  huawei.Sim=req.body.Sim;
  huawei.Type=req.body.Type;
  huawei.Size=req.body.Size;
  huawei.Resolution=req.body.Resolution;
  huawei.Os=req.body.Os;
  huawei.Chipset=req.body.Chipset;
  huawei.Cpu=req.body.Cpu;
  huawei.Gpu=req.body.Gpu;
  huawei.FrontCamera=req.body.FrontCamera;
  huawei.CardSlot=req.body.CardSlot;
  huawei.Internal=req.body.Internal;
  huawei.Camera=req.body.Camera;
  huawei.Sound=req.body.Sound;
  huawei.Comms=req.body.Comms;
  huawei.Features=req.body.Features;
  huawei.Battery=req.body.Battery;
  huawei .Colors=req.body.Colors;
  huawei .mcamFeatures=req.body.mcamFeatures;
  huawei .mcamVideo=req.body.mcamVideo;
  huawei .ScamFeatures=req.body.ScamFeatures;
  huawei .ScamVideo=req.body.ScamVideo;
  huawei .Bluetooth=req.body.Bluetooth;
  huawei .NFC=req.body.NFC;
  huawei .Radio=req.body.Radio;
  huawei .GPS=req.body.GPS;
  huawei .Charging=req.body.Charging;
  await huawei.save();
  return res.send(huawei);
});
const {Lenovo} = require("../../models/Lenovo");
//get products
router.get("/lenovo",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let lenovos = await Lenovo.find().skip(skipRecords).limit(perPage);
  return res.send(lenovos);
});
//get single products
router.get("/lenovo/:id",async (req, res) => {
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
router.put("/lenovo/:id",  async (req, res) => {
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
router.delete("/lenovo/:id",async (req, res) => {
  let lenovo = await Lenovo.findByIdAndDelete(req.params.id);
  return res.send(lenovo);
});
//Insert a record
router.post("/lenovo", async (req, res) => {
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
const {LG} = require("../../models/LG");
//get products
router.get("/lg",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let lgs = await LG.find().skip(skipRecords).limit(perPage);
  return res.send(lgs);
});
//get single products
router.get("/lg/:id", async (req, res) => {
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
router.put("/lg/:id",  async (req, res) => {
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
router.delete("/lg/:id",async (req, res) => {
  let lg = await LG.findByIdAndDelete(req.params.id);
  return res.send(lg);
});
//Insert a record
router.post("/lg",  async(req, res) => {
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
const {Motorola} = require("../../models/Motorola");
//get products
router.get("/motorola",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let motorolas = await Motorola.find().skip(skipRecords).limit(perPage);
  return res.send(motorolas);
});
//get single products
router.get("/motorola/:id", async (req, res) => {
  try {
    let motorola = await Motorola.findById(req.params.id);
    if (!motorola)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(motorola); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/motorola/:id",  async (req, res) => {
  let motorola = await Motorola.findById(req.params.id);
  motorola.name = req.body.name;
  motorola.Price = req.body.Price;
  motorola.picture = req.body.picture;
  motorola.technology= req.body.technology;
  motorola.Announced=req.body.Announced;
  motorola.Dimension=req.body.Dimension;
  motorola.Weight=req.body.Weight;
  motorola.Build=req.body.Build;
  motorola.Sim=req.body.Sim;
  motorola.Type=req.body.Type;
  motorola .Size=req.body.Size;
  motorola .Resolution=req.body.Resolution;
  motorola .Os=req.body.Os;
  motorola .Chipset=req.body.Chipset;
  motorola .Cpu=req.body.Cpu;
  motorola .Gpu=req.body.Gpu;
  motorola .FrontCamera=req.body.FrontCamera;
  motorola .CardSlot=req.body.CardSlot;
  motorola .Internal=req.body.Internal;
  motorola .Camera=req.body.Camera;
  motorola .Sound=req.body.Sound;
  motorola.Comms=req.body.Comms;
  motorola.Features=req.body.Features;
  motorola.Battery=req.body.Battery;
  motorola.Colors=req.body.Colors;
  motorola.mcamFeatures=req.body.mcamFeatures;
  motorola.mcamVideo=req.body.mcamVideo;
  motorola.ScamFeatures=req.body.ScamFeatures;
  motorola.ScamVideo=req.body.ScamVideo;
  motorola .Bluetooth=req.body.Bluetooth;
  motorola .NFC=req.body.NFC;
  motorola .Radio=req.body.Radio;
  motorola .GPS=req.body.GPS;
  motorola .Charging=req.body.Charging;
  await motorola.save();
  return res.send(motorola);
});
//delete a record
router.delete("/motorola/:id",async (req, res) => {
  let motorola = await Motorola.findByIdAndDelete(req.params.id);
  return res.send(motorola);
});
//Insert a record
router.post("/motorola", async (req, res) => {
  let motorola = new Motorola();
  motorola.name = req.body.name;
  motorola.Price = req.body.Price;
  motorola.picture = req.body.picture;
  motorola.technology= req.body.technology;
  motorola.Announced=req.body.Announced;
  motorola.Dimension=req.body.Dimension;
  motorola.Weight=req.body.Weight;
  motorola.Build=req.body.Build;
  motorola.Sim=req.body.Sim;
  motorola.Type=req.body.Type;
  motorola .Size=req.body.Size;
  motorola .Resolution=req.body.Resolution;
  motorola .Os=req.body.Os;
  motorola .Chipset=req.body.Chipset;
  motorola .Cpu=req.body.Cpu;
  motorola .Gpu=req.body.Gpu;
  motorola .FrontCamera=req.body.FrontCamera;
  motorola .CardSlot=req.body.CardSlot;
  motorola .Internal=req.body.Internal;
  motorola .Camera=req.body.Camera;
  motorola .Sound=req.body.Sound;
  motorola.Comms=req.body.Comms;
  motorola.Features=req.body.Features;
  motorola.Battery=req.body.Battery;
  motorola.Colors=req.body.Colors;
  motorola.mcamFeatures=req.body.mcamFeatures;
  motorola.mcamVideo=req.body.mcamVideo;
  motorola.ScamFeatures=req.body.ScamFeatures;
  motorola.ScamVideo=req.body.ScamVideo;
  motorola .Bluetooth=req.body.Bluetooth;
  motorola .NFC=req.body.NFC;
  motorola .Radio=req.body.Radio;
  motorola .GPS=req.body.GPS;
  motorola .Charging=req.body.Charging;
  await motorola.save();
  return res.send(motorola);
});
const {Nokia} = require("../../models/Nokia");
//get products
router.get("/nokia",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let nokias = await Nokia.find().skip(skipRecords).limit(perPage);
  return res.send(nokias);
});
//get single products
router.get("/nokia/:id",async (req, res) => {
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
router.put("/nokia/:id",async (req, res) => {
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
router.delete("/nokia/:id", async (req, res) => {
  let nokia = await Nokia.findByIdAndDelete(req.params.id);
  return res.send(nokia);
});
//Insert a record
router.post("/nokia", async (req, res) => {
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
const {OnePlus} = require("../../models/OnePlus");
//get products
router.get("/oneplus",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let onepluss = await OnePlus.find().skip(skipRecords).limit(perPage);
  return res.send(onepluss);
});
//get single products
router.get("/oneplus/:id", async (req, res) => {
  try {
    let oneplus = await OnePlus.findById(req.params.id);
    if (!oneplus)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(oneplus); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/oneplus/:id",  async (req, res) => {
  let oneplus = await OnePlus.findById(req.params.id);
  oneplus.name = req.body.name;
  oneplus.Price = req.body.Price;
  oneplus.picture = req.body.picture;
  oneplus.technology= req.body.technology;
  oneplus.Announced=req.body.Announced;
  oneplus.Dimension=req.body.Dimension;
  oneplus.Weight=req.body.Weight;
  oneplus.Build=req.body.Build;
  oneplus.Sim=req.body.Sim;
  oneplus.Type=req.body.Type;
  oneplus .Size=req.body.Size;
  oneplus .Resolution=req.body.Resolution;
  oneplus .Os=req.body.Os;
  oneplus .Chipset=req.body.Chipset;
  oneplus .Cpu=req.body.Cpu;
  oneplus .Gpu=req.body.Gpu;
  oneplus .FrontCamera=req.body.FrontCamera;
  oneplus .CardSlot=req.body.CardSlot;
  oneplus .Internal=req.body.Internal;
  oneplus .Camera=req.body.Camera;
  oneplus .Sound=req.body.Sound;
  oneplus.Comms=req.body.Comms;
  oneplus.Features=req.body.Features;
  oneplus.Battery=req.body.Battery;
  oneplus.Colors=req.body.Colors;
  oneplus.mcamFeatures=req.body.mcamFeatures;
  oneplus.mcamVideo=req.body.mcamVideo;
  oneplus.ScamFeatures=req.body.ScamFeatures;
  oneplus.ScamVideo=req.body.ScamVideo;
  oneplus .Bluetooth=req.body.Bluetooth;
  oneplus .NFC=req.body.NFC;
  oneplus .Radio=req.body.Radio;
  oneplus .GPS=req.body.GPS;
  oneplus .Charging=req.body.Charging;
  await oneplus.save();
  return res.send(oneplus);
});
//delete a record
router.delete("/oneplus/:id", async (req, res) => {
  let oneplus = await OnePlus.findByIdAndDelete(req.params.id);
  return res.send(oneplus);
});
//Insert a record
router.post("/oneplus", async (req, res) => {
  let oneplus = new OnePlus();
  oneplus.name = req.body.name;
  oneplus.Price = req.body.Price;
  oneplus.picture = req.body.picture;
  oneplus.technology= req.body.technology;
  oneplus.Announced=req.body.Announced;
  oneplus.Dimension=req.body.Dimension;
  oneplus.Weight=req.body.Weight;
  oneplus.Build=req.body.Build;
  oneplus.Sim=req.body.Sim;
  oneplus.Type=req.body.Type;
  oneplus .Size=req.body.Size;
  oneplus .Resolution=req.body.Resolution;
  oneplus .Os=req.body.Os;
  oneplus .Chipset=req.body.Chipset;
  oneplus .Cpu=req.body.Cpu;
  oneplus .Gpu=req.body.Gpu;
  oneplus .FrontCamera=req.body.FrontCamera;
  oneplus .CardSlot=req.body.CardSlot;
  oneplus .Internal=req.body.Internal;
  oneplus .Camera=req.body.Camera;
  oneplus .Sound=req.body.Sound;
  oneplus.Comms=req.body.Comms;
  oneplus.Features=req.body.Features;
  oneplus.Battery=req.body.Battery;
  oneplus.Colors=req.body.Colors;
  oneplus.mcamFeatures=req.body.mcamFeatures;
  oneplus.mcamVideo=req.body.mcamVideo;
  oneplus.ScamFeatures=req.body.ScamFeatures;
  oneplus.ScamVideo=req.body.ScamVideo;
  oneplus .Bluetooth=req.body.Bluetooth;
  oneplus .NFC=req.body.NFC;
  oneplus .Radio=req.body.Radio;
  oneplus .GPS=req.body.GPS;
  oneplus .Charging=req.body.Charging;
  await oneplus.save();
  return res.send(oneplus);
});
const {Oppo} = require("../../models/Oppo");
//get products
router.get("/oppo",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let oppos = await Oppo.find().skip(skipRecords).limit(perPage);
  return res.send(oppos);
});
//get single products
router.get("/oppo/:id", async (req, res) => {
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
router.put("/oppo/:id",  async (req, res) => {
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
router.delete("/oppo/:id", async (req, res) => {
  let oppo = await Oppo.findByIdAndDelete(req.params.id);
  return res.send(oppo);
});
//Insert a record
router.post("/oppo", async (req, res) => {
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
const {Poco} = require("../../models/Poco");
//get products
router.get("/poco",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let pocos = await Poco.find().skip(skipRecords).limit(perPage);
  return res.send(pocos);
});
//get single products
router.get("/poco/:id", async (req, res) => {
  try {
    let poco = await Poco.findById(req.params.id);
    if (!poco)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(poco); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/poco/:id",  async (req, res) => {
  let poco = await Poco.findById(req.params.id);
  poco.name = req.body.name;
  poco.Price = req.body.Price;
  poco.picture = req.body.picture;
  poco.technology= req.body.technology;
  poco.Announced=req.body.Announced;
  poco.Dimension=req.body.Dimension;
  poco.Weight=req.body.Weight;
  poco.Build=req.body.Build;
  poco.Sim=req.body.Sim;
  poco.Type=req.body.Type;
  poco .Size=req.body.Size;
  poco .Resolution=req.body.Resolution;
  poco .Os=req.body.Os;
  poco .Chipset=req.body.Chipset;
  poco .Cpu=req.body.Cpu;
  poco .Gpu=req.body.Gpu;
  poco .FrontCamera=req.body.FrontCamera;
  poco .CardSlot=req.body.CardSlot;
  poco .Internal=req.body.Internal;
  poco .Camera=req.body.Camera;
  poco .Sound=req.body.Sound;
  poco.Comms=req.body.Comms;
  poco.Features=req.body.Features;
  poco.Battery=req.body.Battery;
  poco.Colors=req.body.Colors;
  poco.mcamFeatures=req.body.mcamFeatures;
  poco.mcamVideo=req.body.mcamVideo;
  poco.ScamFeatures=req.body.ScamFeatures;
  poco.ScamVideo=req.body.ScamVideo;
  poco .Bluetooth=req.body.Bluetooth;
  poco .NFC=req.body.NFC;
  poco .Radio=req.body.Radio;
  poco .GPS=req.body.GPS;
  poco .Charging=req.body.Charging;
  await poco.save();
  return res.send(poco);
});
//delete a record
router.delete("/poco/:id", async (req, res) => {
  let poco = await Poco.findByIdAndDelete(req.params.id);
  return res.send(poco);
});
//Insert a record
router.post("/poco", async (req, res) => {
  let poco = new Poco();
  poco.name = req.body.name;
  poco.Price = req.body.Price;
  poco.picture = req.body.picture;
  poco.technology= req.body.technology;
  poco.Announced=req.body.Announced;
  poco.Dimension=req.body.Dimension;
  poco.Weight=req.body.Weight;
  poco.Build=req.body.Build;
  poco.Sim=req.body.Sim;
  poco.Type=req.body.Type;
  poco .Size=req.body.Size;
  poco .Resolution=req.body.Resolution;
  poco .Os=req.body.Os;
  poco .Chipset=req.body.Chipset;
  poco .Cpu=req.body.Cpu;
  poco .Gpu=req.body.Gpu;
  poco .FrontCamera=req.body.FrontCamera;
  poco .CardSlot=req.body.CardSlot;
  poco .Internal=req.body.Internal;
  poco .Camera=req.body.Camera;
  poco .Sound=req.body.Sound;
  poco.Comms=req.body.Comms;
  poco.Features=req.body.Features;
  poco.Battery=req.body.Battery;
  poco.Colors=req.body.Colors;
  poco.mcamFeatures=req.body.mcamFeatures;
  poco.mcamVideo=req.body.mcamVideo;
  poco.ScamFeatures=req.body.ScamFeatures;
  poco.ScamVideo=req.body.ScamVideo;
  poco .Bluetooth=req.body.Bluetooth;
  poco .NFC=req.body.NFC;
  poco .Radio=req.body.Radio;
  poco .GPS=req.body.GPS;
  poco .Charging=req.body.Charging;
  await poco.save();
  return res.send(poco);
});
const {Realme} = require("../../models/Realme");
//get products
router.get("/realme",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let realmes = await Realme.find().skip(skipRecords).limit(perPage);
  return res.send(realmes);
});
//get single products
router.get("/realme/:id", async (req, res) => {
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
router.put("/realme/:id",  async (req, res) => {
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
router.delete("/realme/:id", async (req, res) => {
  let realme = await Realme.findByIdAndDelete(req.params.id);
  return res.send(realme);
});
//Insert a record
router.post("/realme", async (req, res) => {
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
const {Samsung} = require("../../models/samsung");
//get products
router.get("/samsung",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let samsungs = await Samsung.find().skip(skipRecords).limit(perPage);
  return res.send(samsungs);
});
//get single products
router.get("/samsung/:id",async (req, res) => {
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
router.put("/samsung/:id", async (req, res) => {
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
router.delete("/samsung/:id", async (req, res) => {
  let samsung = await Samsung.findByIdAndDelete(req.params.id);
  return res.send(samsung);
});
//Insert a record
router.post("/samsung",async (req, res) => {
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
const {Techno} = require("../../models/Techno");
//get products
router.get("/techno",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let technos = await Techno.find().skip(skipRecords).limit(perPage);
  return res.send(technos);
});
//get single products
router.get("/techno/:id",async (req, res) => {
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
router.put("/techno/:id",  async (req, res) => {
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
router.delete("/techno/:id", async (req, res) => {
  let techno = await Techno.findByIdAndDelete(req.params.id);
  return res.send(techno);
});
//Insert a record
router.post("/techno", async (req, res) => {
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
const { Vivo } = require("../../models/Vivo");
//get products
router.get("/vivo",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let vivos = await Vivo.find().skip(skipRecords).limit(perPage);
  return res.send(vivos);
});
//get single products
router.get("/vivo/:id", async (req, res) => {
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
router.put("/vivo/:id",  async (req, res) => {
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
router.delete("/vivo/:id", async (req, res) => {
  let vivo = await Vivo.findByIdAndDelete(req.params.id);
  return res.send(vivo);
});
//Insert a record
router.post("/vivo", async (req, res) => {
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
const {Xiaomi} = require("../../models/Xiaomi");
//get products
router.get("/xiaomi",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let xiaomis = await Xiaomi.find().skip(skipRecords).limit(perPage);
  return res.send(xiaomis);
});
//get single products
router.get("/xiaomi/:id", async (req, res) => {
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
router.put("/xiaomi/:id",  async (req, res) => {
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
router.delete("/xiaomi/:id", async (req, res) => {
  let xiaomi = await Xiaomi.findByIdAndDelete(req.params.id);
  return res.send(xiaomi);
});
//Insert a record
router.post("/xiaomi", async (req, res) => {
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
const {ZTE} = require("../../models/ZTE");
//get products
router.get("/zte",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let ztes = await ZTE.find().skip(skipRecords).limit(perPage);
  return res.send(ztes);
});
//get single products
router.get("/zte/:id", async (req, res) => {
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
router.put("/zte/:id",  async (req, res) => {
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
router.delete("/zte/:id",async (req, res) => {
  let zte = await ZTE.findByIdAndDelete(req.params.id);
  return res.send(zte);
});
//Insert a record
router.post("/zte", async (req, res) => {
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