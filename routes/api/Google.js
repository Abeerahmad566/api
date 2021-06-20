const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Google} = require("../../models/Google");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let googles = await Google.find().skip(skipRecords).limit(perPage);
  return res.send(googles);
});
//get single products
router.get("/:id", async (req, res) => {
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
router.put("/:id",  async (req, res) => {
  let google = await Google.findById(req.params.id);
  google.name = req.body.name;
  google.Price = req.body.Price;
  google.picture = req.body.picture;
  google.technology= req.body.technology;
  await google.save();
  return res.send(google);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let google = await Google.findByIdAndDelete(req.params.id);
  return res.send(google);
});
//Insert a record
router.post("/", async (req, res) => {
  let google = new Google();
  google.name = req.body.name;
  google.Price = req.body.Price;
  google.picture = req.body.picture;
  google.technology= req.body.technology;
  await google.save();
  return res.send(google);
});
module.exports = router;