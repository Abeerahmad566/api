const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {ZTE} = require("../../models/ZTE");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let ztes = await ZTE.find().skip(skipRecords).limit(perPage);
  return res.send(ztes);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let zte = await ZTE.findById(req.params.id);
    if (!zte)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(zte); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let zte = await ZTE.findById(req.params.id);
  zte.name = req.body.name;
  zte.Price = req.body.Price;
  zte.picture = req.body.picture;
  zte.technology= req.body.technology;
  await zte.save();
  return res.send(zte);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let zte = await ZTE.findByIdAndDelete(req.params.id);
  return res.send(zte);
});
//Insert a record
router.post("/", async (req, res) => {
  let zte = new ZTE();
  zte.name = req.body.name;
  zte.Price = req.body.Price;
  zte.picture = req.body.picture;
  zte.technology= req.body.technology;
  await zte.save();
  return res.send(zte);
});
module.exports = router;