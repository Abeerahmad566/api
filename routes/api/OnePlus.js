const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {OnePlus} = require("../../models/OnePlus");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let onepluss = await OnePlus.find().skip(skipRecords).limit(perPage);
  return res.send(onepluss);
});
//get single products
router.get("/:id", async (req, res) => {
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
router.put("/:id",  async (req, res) => {
  let oneplus = await OnePlus.findById(req.params.id);
  oneplus.name = req.body.name;
  oneplus.Price = req.body.Price;
  oneplus.picture = req.body.picture;
  oneplus.technology= req.body.technology;
  await oneplus.save();
  return res.send(oneplus);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let oneplus = await OnePlus.findByIdAndDelete(req.params.id);
  return res.send(oneplus);
});
//Insert a record
router.post("/", async (req, res) => {
  let oneplus = new OnePlus();
  oneplus.name = req.body.name;
  oneplus.Price = req.body.Price;
  oneplus.picture = req.body.picture;
  oneplus.technology= req.body.technology;
  await oneplus.save();
  return res.send(oneplus);
});
module.exports = router;