const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Xiaomi} = require("../../models/Xiaomi");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let xiaomis = await Xiaomi.find().skip(skipRecords).limit(perPage);
  return res.send(xiaomis);
});
//get single products
router.get("/:id", async (req, res) => {
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
router.put("/:id",  async (req, res) => {
  let xiaomi = await Xiaomi.findById(req.params.id);
  xiaomi.name = req.body.name;
  xiaomi.Price = req.body.Price;
  xiaomi.picture = req.body.picture;
  xiaomi.technology= req.body.technology;
  await xiaomi.save();
  return res.send(xiaomi);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let xiaomi = await Xiaomi.findByIdAndDelete(req.params.id);
  return res.send(xiaomi);
});
//Insert a record
router.post("/", async (req, res) => {
  let xiaomi = new Xiaomi();
  xiaomi.name = req.body.name;
  xiaomi.Price = req.body.Price;
  xiaomi.picture = req.body.picture;
  xiaomi.technology= req.body.technology;
  await xiaomi.save();
  return res.send(xiaomi);
});
module.exports = router;