const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Nokia} = require("../../models/Nokia");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let nokias = await Nokia.find().skip(skipRecords).limit(perPage);
  return res.send(nokias);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let nokia = await Nokia.findById(req.params.id);
    if (!nokia)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(nokia); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let nokia = await Nokia.findById(req.params.id);
  nokia.name = req.body.name;
  nokia.Price = req.body.Price;
  nokia.picture = req.body.picture;
  nokia.technology= req.body.technology;
  await nokia.save();
  return res.send(nokia);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let nokia = await Nokia.findByIdAndDelete(req.params.id);
  return res.send(nokia);
});
//Insert a record
router.post("/", async (req, res) => {
  let nokia = new Nokia();
  nokia.name = req.body.name;
  nokia.Price = req.body.Price;
  nokia.picture = req.body.picture;
  nokia.technology= req.body.technology;
  await nokia.save();
  return res.send(nokia);
});
module.exports = router;