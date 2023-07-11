const express = require("express");
const app = express();
const { getTestCall, postTestCall, getTestCallID, patchTestCallID, deleteTestCallID } = require("./controller/tourController");
app.use(express.json());

const toursRouter = express.Router();
app.use("/api/v1/tours", toursRouter);

const mdlWare = (req, res, next) => {
  console.log(req.body);
  next();
};

toursRouter.route("/").get(getTestCall).post(mdlWare, postTestCall);
toursRouter.route("/:id").get(getTestCallID).patch(patchTestCallID).delete(deleteTestCallID);

module.exports = toursRouter;
