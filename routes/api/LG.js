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
router.get("/:id", async (req, res) => {
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
router.put("/:id",  async (req, res) => {
  let lg = await LG.findById(req.params.id);
  lg.name = req.body.name;
  lg.Price = req.body.Price;
  lg.picture = req.body.picture;
  lg.technology= req.body.technology;
  await lg.save();
  return res.send(lg);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let lg = await LG.findByIdAndDelete(req.params.id);
  return res.send(lg);
});
//Insert a record
router.post("/", async (req, res) => {
  let lg = new LG();
  lg.name = req.body.name;
  lg.Price = req.body.Price;
  lg.picture = req.body.picture;
  lg.technology= req.body.technology;
  await lg.save();
  return res.send(lg);
});
module.exports = router;