const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Apple} = require("../../models/Apple");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let apples = await Apple.find().skip(skipRecords).limit(perPage);
  return res.send(apples);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let apple = await Apple.findById(req.params.id);
    if (!apple)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(apple); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let apple = await Apple.findById(req.params.id);
  apple.name = req.body.name;
  apple.Price = req.body.Price;
  apple.picture = req.body.picture;
  apple.technology= req.body.technology;
  await apple.save();
  return res.send(apple);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let apple = await Apple.findByIdAndDelete(req.params.id);
  return res.send(apple);
});
//Insert a record
router.post("/", async (req, res) => {
  let apple = new Apple();
  apple.name = req.body.name;
  apple.Price = req.body.Price;
  apple.picture = req.body.picture;
  apple.technology= req.body.technology;
  await apple.save();
  return res.send(apple);
});
module.exports = router;