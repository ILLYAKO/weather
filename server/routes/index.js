const Router = require("express");
const router = new Router();
const userRouter = require("./userRoute");
const appointmentRouter = require("./appointmentRoute");

// const productRouter = require("./productRouter");
// const orderRouter = require("./orderRouter");

router.use("/user", userRouter);
router.use("/appointment", appointmentRouter);

// router.use("/product", productRouter);
// router.use("/order", orderRouter);

module.exports = router;
