const express = require("express");
const router = express.Router();
const loginRequired = require("../middlewares/loginRequired");
const adminRequired = require("../middlewares/adminRequired");
const { operateBoardService } = require("../services");
const { boardValidator } = require("../middlewares/validator/boardValidator");

router.post(
  "/",
  loginRequired,
  adminRequired,
  boardValidator(),
  operateBoardService.addOperateBoard
);
// router.post("/", boardValidator(), operateBoardService.addOperateBoard);
router.get(
  "/",
  loginRequired,
  adminRequired,
  operateBoardService.getOperateBoards
);
router.get(
  "/:id",
  loginRequired,
  adminRequired,
  operateBoardService.getOperateBoard
);
router.patch(
  "/:id",
  loginRequired,
  adminRequired,
  boardValidator(),
  operateBoardService.setOperateBoard
);
router.delete(
  "/:id",
  loginRequired,
  adminRequired,
  boardValidator(),
  operateBoardService.deleteOperateBoard
);

module.exports = router;
