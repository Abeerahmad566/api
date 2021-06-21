const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const {Techno} = require("../../models/Techno");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let technos = await Techno.find().skip(skipRecords).limit(perPage);
  return res.send(technos);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let techno = await Techno.findById(req.params.id);
    if (!techno)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(techno); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let techno = await Techno.findById(req.params.id);
  techno.name = req.body.name;
  techno.Price = req.body.Price;
  techno.picture = req.body.picture;
  techno.technology= req.body.technology;
  await techno.save();
  return res.send(techno);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let techno = await Techno.findByIdAndDelete(req.params.id);
  return res.send(techno);
});
//Insert a record
router.post("/", async (req, res) => {
  let techno = new Techno();
  techno.name = req.body.name;
  techno.Price = req.body.Price;
  techno.picture = req.body.picture;
  techno.technology= req.body.technology;
  await techno.save();
  return res.send(techno);
});
module.exports = router;