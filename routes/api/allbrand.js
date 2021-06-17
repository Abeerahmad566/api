const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {AllBrand} = require("../../models/allbrand");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let allbrands = await AllBrand.find().skip(skipRecords).limit(perPage);
  return res.send(allbrands);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let allbrand = await AllBrand.findById(req.params.id);
    if (!allbrand)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(allbrand); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let allbrand = await AllBrand.findById(req.params.id);
  allbrand.name = req.body.name;
  allbrand.price = req.body.price;
  await allbrand.save();
  return res.send(allbrand);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let allbrand = await AllBrand.findByIdAndDelete(req.params.id);
  return res.send(allbrand);
});
//Insert a record
router.post("/", async (req, res) => {
  let allbrand = new AllBrand();
  allbrand.name = req.body.name;
  allbrand.price = req.body.price;
  await allbrand.save();
  return res.send(allbrand);
});
module.exports = router;