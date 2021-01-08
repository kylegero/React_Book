const router = require("express").Router();
const bookRs = require("./books");
router.use("/books", bookRs);
module.exports = router