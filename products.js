const express = require("express")
const router = express.Router()
const controller = require("./controller/product")
router.get("/",controller.fetching)
router.post("/",controller.adding)
router.get("/:id",controller.getting)
router.post("/update",controller.update)
router.post("/delete",controller.deleted)

module.exports = router