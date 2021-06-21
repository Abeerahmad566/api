const express = require("express");
let router = express.Router();
const validateProduct = require("../../middleWares/validateProduct");
const auth = require("../../middleWares/auth");
const admin = require("../../middleWares/admin");
const { Vivo } = require("../../models/Vivo");
//get products
router.get("/",async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let vivos = await Vivo.find().skip(skipRecords).limit(perPage);
  return res.send(vivos);
});
//get single products
router.get("/:id", async (req, res) => {
  try {
    let vivo = await Vivo.findById(req.params.id);
    if (!vivo)
      return res.status(400).send("Product With given ID is not present"); //when id is not present id db
    return res.send(vivo); //everything is ok
  } catch (err) {
    return res.status(400).send("Invalid ID"); // format of id is not correct
  }
});
//update a record
router.put("/:id",  async (req, res) => {
  let vivo = await Vivo.findById(req.params.id);
  vivo.name = req.body.name;
  vivo.Price = req.body.Price;
  vivo.picture = req.body.picture;
  vivo.technology= req.body.technology;
  await vivo.save();
  return res.send(vivo);
});
//delete a record
router.delete("/:id", async (req, res) => {
  let vivo = await Vivo.findByIdAndDelete(req.params.id);
  return res.send(vivo);
});
//Insert a record
router.post("/", async (req, res) => {
  let vivo = new Vivo();
  vivo.name = req.body.name;
  vivo.Price = req.body.Price;
  vivo.picture = req.body.picture;
  vivo.technology= req.body.technology;
  await vivo.save();
  return res.send(vivo);
});
module.exports = router;