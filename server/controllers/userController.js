const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");
const ApiError = require("../error/ApiError");

const generateToken = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password)
      return next(ApiError.badRequest("Bad Password or Email"));
    const candidat = await User.findOne({
      where: { email },
    });
    if (candidat) {
      return next(ApiError.badRequest("User by exist"));
    }
    const hashPassword = await bcrypt(password, 5); //сколько раз будем хешировать пароль???
    const user = await User.create({
      email,
      role,
      password: hashPassword,
    });

    const basket = await Basket.create({
      userId: user.id,
    });

    const token = generateToken(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return next(ApiError.internal("User not found"));
    }

    let compPass = bcrypt.compareSync(password, user.password);
    if (!compPass) next(ApiError.internal("Password wrong"));
    const token = generateToken(user.id, user.email, user.role);
    return res.json({ token });
  }

  async checkAuth(req, res, next) {
    const query = req.query;
    if (!query.id) {
      return next(ApiError.badRequest("Ошибка"));
    }
    return res.json(query.id);
  }
}

module.exports = new UserController();
