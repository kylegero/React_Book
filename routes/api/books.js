const router = require("express").Router();
const booksCont = require("../../controllers/bookscont");

router.route("/")
    .get(booksCont.searchAll)
    .post(booksCont.save);

    router.route("/:id")
    .get(booksCont.searchOne)
    .delete(booksCont.discard);

    module.exports = router