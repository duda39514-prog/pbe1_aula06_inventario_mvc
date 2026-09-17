const express = require("express")
const router = express.Router()

const {
    create, list 
} = require("./controller")

router.get("/bens", list)
router.post("/bens", create)

module.exports = router