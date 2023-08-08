const express = require("express");
const {schemas}=require('../../models/user');
const {ctrlWrapper}= require('../../helpers')
const { getAll, getById, addUser, deleteById, updateById, updateOnline} = require("../../controllers");
const { validateBody, isValidId } = require("../../middleware");

const router = express.Router();

router.get("/", ctrlWrapper(getAll));

router.get("/:id", isValidId, ctrlWrapper(getById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(addUser));

router.delete("/:id", isValidId, ctrlWrapper(deleteById));

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrlWrapper(updateById));

router.patch("/:id/online", isValidId, validateBody(schemas.updateOnlineSchema), ctrlWrapper(updateOnline));

module.exports = router;
