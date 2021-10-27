const Router = require("express");
const router = new Router();
const userRouter = require("./userRoute");
const appointmentRouter = require("./appointmentRoute");

router.use("/user", userRouter);
router.use("/appointment", appointmentRouter);

module.exports = router;
