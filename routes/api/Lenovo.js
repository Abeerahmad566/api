const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Lenovo} = require("../../models/Lenovo");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let lenovos = await Lenovo.find().skip(skipRecords).limit(perPage);
  return res.send(lenovos);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let lenovo = await Lenovo.findById(req.params.id);
    if (!lenovo)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(lenovo); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let lenovo = await Lenovo.findById(req.params.id);
  lenovo.name = req.body.name;
  lenovo.Price = req.body.Price;
  lenovo.picture = req.body.picture;
  lenovo.technology= req.body.technology;
  await lenovo.save();
  return res.send(lenovo);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let lenovo = await Lenovo.findByIdAndDelete(req.params.id);
  return res.send(lenovo);
});
//Insert a record
router.post("/", async (req, res) => {
  let lenovo = new Lenovo();
  lenovo.name = req.body.name;
  lenovo.Price = req.body.Price;
  lenovo.picture = req.body.picture;
  lenovo.technology= req.body.technology;
  await lenovo.save();
  return res.send(lenovo);
});
module.exports = router;