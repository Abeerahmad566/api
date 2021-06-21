const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Sony} = require("../../models/Sony");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let sonys = await Sony.find().skip(skipRecords).limit(perPage);
  return res.send(sonys);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let sonny = await Sony.findById(req.params.id);
    if (!sonny)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(sonny); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let sonny = await Sony.findById(req.params.id);
  sonny.name = req.body.name;
  sonny.Price = req.body.Price;
  sonny.picture = req.body.picture;
  sonny.technology= req.body.technology;
  await sonny.save();
  return res.send(sonny);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let sonny = await Sony.findByIdAndDelete(req.params.id);
  return res.send(sonny);
});
//Insert a record
router.post("/", async (req, res) => {
  let sonny = new Sony();
  sonny.name = req.body.name;
  sonny.Price = req.body.Price;
  sonny.picture = req.body.picture;
  sonny.technology= req.body.technology;
  await sonny.save();
  return res.send(sonny);
});
module.exports = router;