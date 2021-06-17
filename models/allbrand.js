var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var allbrandSchema = mongoose.Schema({
  name: String,
  
});
var AllBrand = mongoose.model("AllBrand", allbrandSchema);

function validateProduct(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports = {AllBrand,validateProduct}
