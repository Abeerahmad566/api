var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var OppoSchema = mongoose.Schema({
  name: String,
  picture: String,
  technology:String,
  Announced:String,
  Dimension:String,
  Weight:String,
  Build:String,
  Sim:String,
  Type:String,
  Size:String,
  Resolution:String,
  Os:String,
  Chipset:String,
  Cpu:String,
  FrontCamera:String,
  Gpu:String,
  CardSlot:String,
  Internal:String,
  Camera:String,
  Sound:String,
  Comms:String,
  Features:String,
  Battery:String,
  Colors:String,
  Price:String,
  mcamFeatures:String,
  mcamVideo:String,
  ScamFeatures:String,
  ScamVideo:String,
  Bluetooth:String,
  NFC:String,
  Radio:String,
  GPS:String,
  Charging:String,
});
var Oppo = mongoose.model("Oppo", OppoSchema);

function validateProduct(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    price: Joi.number().min(0).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports = {Oppo,validateProduct}
