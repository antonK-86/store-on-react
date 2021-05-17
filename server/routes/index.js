const Router = require("express");
const router = new Router();
const deviceRouter = require("./deviceRouter");
const userRouter = require("./userRouter");
const typeDeviceRouter = require("./typeDeviceRouter");
const brandRouter = require("./brandRouter");

router.use("/user", userRouter);
router.use("/type", typeDeviceRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);

module.exports = router;
