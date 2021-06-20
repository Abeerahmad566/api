const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Huawei} = require("../../models/Huawei");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let huaweis = await Huawei.find().skip(skipRecords).limit(perPage);
  return res.send(huaweis);
});
//get single products
router.get("/:id", async (req, res) => {
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
router.put("/:id",  async (req, res) => {
  let huawei = await Huawei.findById(req.params.id);
  huawei.name = req.body.name;
  huawei.Price = req.body.Price;
  huawei.picture = req.body.picture;
  huawei.technology= req.body.technology;
  await huawei.save();
  return res.send(huawei);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let huawei = await Huawei.findByIdAndDelete(req.params.id);
  return res.send(huawei);
});
//Insert a record
router.post("/", async (req, res) => {
  let huawei = new Huawei();
  huawei.name = req.body.name;
  huawei.Price = req.body.Price;
  huawei.picture = req.body.picture;
  huawei.technology= req.body.technology;
  await huawei.save();
  return res.send(huawei);
});
module.exports = router;