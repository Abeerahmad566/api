const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Poco} = require("../../models/Poco");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let pocos = await Poco.find().skip(skipRecords).limit(perPage);
  return res.send(pocos);
});
//get single products
router.get("/:id", async (req, res) => {
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
router.put("/:id",  async (req, res) => {
  let poco = await Poco.findById(req.params.id);
  poco.name = req.body.name;
  poco.Price = req.body.Price;
  poco.picture = req.body.picture;
  poco.technology= req.body.technology;
  await poco.save();
  return res.send(poco);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let poco = await Poco.findByIdAndDelete(req.params.id);
  return res.send(poco);
});
//Insert a record
router.post("/", async (req, res) => {
  let poco = new Poco();
  poco.name = req.body.name;
  poco.Price = req.body.Price;
  poco.picture = req.body.picture;
  poco.technology= req.body.technology;
  await poco.save();
  return res.send(poco);
});
module.exports = router;