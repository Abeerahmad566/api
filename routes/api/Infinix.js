const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Infinix} = require("../../models/Infinix");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let infinixs = await Infinix.find().skip(skipRecords).limit(perPage);
  return res.send(infinixs);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let infinix = await Infinix.findById(req.params.id);
    if (!infinix)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(infinix); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let infinix = await Infinix.findById(req.params.id);
  infinix.name = req.body.name;
  infinix.Price = req.body.Price;
  infinix.picture = req.body.picture;
  infinix.technology= req.body.technology;
  await infinix.save();
  return res.send(infinix);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let infinix = await Infinix.findByIdAndDelete(req.params.id);
  return res.send(infinix);
});
//Insert a record
router.post("/", async (req, res) => {
  let infinix = new Infinix();
  infinix.name = req.body.name;
  infinix.Price = req.body.Price;
  infinix.picture = req.body.picture;
  infinix.technology= req.body.technology;
  await infinix.save();
  return res.send(infinix);
});
module.exports = router;