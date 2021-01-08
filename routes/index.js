const path = require("path");
const router = require("express").Router();
const apiRs = require("./api");

router.use("/api", apiRs);
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  
  module.exports = router;