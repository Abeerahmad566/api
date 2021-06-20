const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {HTC} = require("../../models/HTC");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let htcs = await HTC.find().skip(skipRecords).limit(perPage);
  return res.send(htcs);
});
//get single products
router.get("/:id", async (req, res) => {
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
router.put("/:id",  async (req, res) => {
  let htc = await HTC.findById(req.params.id);
  htc.name = req.body.name;
  htc.Price = req.body.Price;
  htc.picture = req.body.picture;
  htc.technology= req.body.technology;
  await htc.save();
  return res.send(htc);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let htc = await HTC.findByIdAndDelete(req.params.id);
  return res.send(htc);
});
//Insert a record
router.post("/", async (req, res) => {
  let htc = new HTC();
  htc.name = req.body.name;
  htc.Price = req.body.Price;
  htc.picture = req.body.picture;
  htc.technology= req.body.technology;
  await htc.save();
  return res.send(htc);
});
module.exports = router;