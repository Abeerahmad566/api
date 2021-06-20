const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Motorola} = require("../../models/Motorola");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let motorolas = await Motorola.find().skip(skipRecords).limit(perPage);
  return res.send(motorolas);
});
//get single products
router.get("/:id", async (req, res) => {
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
router.put("/:id",  async (req, res) => {
  let motorola = await Motorola.findById(req.params.id);
  motorola.name = req.body.name;
  motorola.Price = req.body.Price;
  motorola.picture = req.body.picture;
  motorola.technology= req.body.technology;
  await motorola.save();
  return res.send(motorola);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let motorola = await Motorola.findByIdAndDelete(req.params.id);
  return res.send(motorola);
});
//Insert a record
router.post("/", async (req, res) => {
  let motorola = new Motorola();
  motorola.name = req.body.name;
  motorola.Price = req.body.Price;
  motorola.picture = req.body.picture;
  motorola.technology= req.body.technology;
  await motorola.save();
  return res.send(motorola);
});
module.exports = router;