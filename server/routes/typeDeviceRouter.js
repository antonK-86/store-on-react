const Router = require("express");
const router = new Router();
const TypeDevController = require("../controllers/typeDevController");
const checkRole= require("../middleware/checkRoleMiddleware")

router.post("/", checkRole("ADMIN"), TypeDevController.create);
router.get("/", TypeDevController.getAll);
router.delete("/");

module.exports = router;
