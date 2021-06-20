const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Oppo} = require("../../models/Oppo");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let oppos = await Oppo.find().skip(skipRecords).limit(perPage);
  return res.send(oppos);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let oppo = await Oppo.findById(req.params.id);
    if (!oppo)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(oppo); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let oppo = await Oppo.findById(req.params.id);
  oppo.name = req.body.name;
  oppo.Price = req.body.Price;
  oppo.picture = req.body.picture;
  oppo.technology= req.body.technology;
  await oppo.save();
  return res.send(oppo);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let oppo = await Oppo.findByIdAndDelete(req.params.id);
  return res.send(oppo);
});
//Insert a record
router.post("/", async (req, res) => {
  let oppo = new Oppo();
  oppo.name = req.body.name;
  oppo.Price = req.body.Price;
  oppo.picture = req.body.picture;
  oppo.technology= req.body.technology;
  await oppo.save();
  return res.send(oppo);
});
module.exports = router;