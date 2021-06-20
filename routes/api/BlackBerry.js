const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {BlackBerry} = require("../../models/BlackBerry");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let blackberrys = await BlackBerry.find().skip(skipRecords).limit(perPage);
  return res.send(blackberrys);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let blackberry = await BlackBerry.findById(req.params.id);
    if (!blackberry)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(blackberry); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let blackberry = await BlackBerry.findById(req.params.id);
  blackberry.name = req.body.name;
  blackberry.Price = req.body.Price;
  blackberry.picture = req.body.picture;
  blackberry.technology= req.body.technology;
  await blackberry.save();
  return res.send(blackberry);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let blackberry = await BlackBerry.findByIdAndDelete(req.params.id);
  return res.send(blackberry);
});
//Insert a record
router.post("/", async (req, res) => {
  let blackberry = new BlackBerry();
  blackberry.name = req.body.name;
  blackberry.Price = req.body.Price;
  blackberry.picture = req.body.picture;
  blackberry.technology= req.body.technology;
  await blackberry.save();
  return res.send(blackberry);
});
module.exports = router;