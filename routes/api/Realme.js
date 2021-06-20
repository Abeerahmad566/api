const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Realme} = require("../../models/Realme");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let realmes = await Realme.find().skip(skipRecords).limit(perPage);
  return res.send(realmes);
});
//get single products
router.get("/:id", async (req, res) => {
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
router.put("/:id",  async (req, res) => {
  let realme = await Realme.findById(req.params.id);
  realme.name = req.body.name;
  realme.Price = req.body.Price;
  realme.picture = req.body.picture;
  realme.technology= req.body.technology;
  await realme.save();
  return res.send(realme);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let realme = await Realme.findByIdAndDelete(req.params.id);
  return res.send(realme);
});
//Insert a record
router.post("/", async (req, res) => {
  let realme = new Realme();
  realme.name = req.body.name;
  realme.Price = req.body.Price;
  realme.picture = req.body.picture;
  realme.technology= req.body.technology;
  await realme.save();
  return res.send(realme);
});
module.exports = router;