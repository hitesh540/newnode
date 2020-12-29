const { Router } = require("express");
const express = require("express");
const router = express.Router();
 

const { terms  } = require("../controllers/terms");

router.get("/terms", terms);

module.exports = router;


