const Router = require("express");
const router = new Router();
const TypeDevController = require("../controllers/typeDevController");

router.post("/", TypeDevController.create);
router.get("/", TypeDevController.getAll);
router.delete("/");

module.exports = router;
