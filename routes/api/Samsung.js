const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Samsung} = require("../../models/samsung");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let samsungs = await Samsung.find().skip(skipRecords).limit(perPage);
  return res.send(samsungs);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let samsung = await Samsung.findById(req.params.id);
    if (!samsung)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(samsung); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let samsung = await Samsung.findById(req.params.id);
  samsung.name = req.body.name;
  samsung.price = req.body.price;
  samsung.price = req.body.picture;
  samsung.technology= req.body.technology;
  await samsung.save();
  return res.send(samsung);
});
//delete a record
router.DELETE("/:id", async (req, res) => {
  let samsung = await Samsung.findByIdAndDelete(req.params.id);
  return res.send(samsung);
});
//Insert a record
router.post("/", async (req, res) => {
  let samsung = new Samsung();
  samsung.name = req.body.name;
  samsung.price = req.body.price;
  samsung.price = req.body.picture;
  samsung.technology= req.body.technology;
  await samsung.save();
  return res.send(samsung);
});
module.exports = router;