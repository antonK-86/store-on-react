const ApiError = require("../error/ApiError");
const { TypeDevice } = require("../models/models");

class TypeDevController {
  async create(req, res) {
    const { name } = req.body;
    const typeDev = await TypeDevice.create({ name });
    return res.json(typeDev);
  }
  async getAll(req, res) {
    const typesAllDev = await TypeDevice.findAll();
    return res.json(typesAllDev);
  }
  //add delete
}

module.exports = new TypeDevController();
