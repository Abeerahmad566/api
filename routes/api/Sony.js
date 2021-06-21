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
    let sony = await Sony.findById(req.params.id);
    if (!sony)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(sony); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let sony = await Sony.findById(req.params.id);
  sony.name = req.body.name;
  sony.Price = req.body.Price;
  sony.picture = req.body.picture;
  sony.technology= req.body.technology;
  await sony.save();
  return res.send(sony);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let sony = await Sony.findByIdAndDelete(req.params.id);
  return res.send(sony);
});
//Insert a record
router.post("/", async (req, res) => {
  let sony = new Sony();
  sony.name = req.body.name;
  sony.Price = req.body.Price;
  sony.picture = req.body.picture;
  sony.technology= req.body.technology;
  await sony.save();
  return res.send(sony);
});
module.exports = router;