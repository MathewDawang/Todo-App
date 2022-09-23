
let express = require("express"),
controller = require("../controller/todo"),
router = express.Router();
router.route("/todo")
    .get(controller.getAllTodos)
    .post(controller.createTodo);

router.route("/:todo")
    .get()
    .patch()
    .delete();

    module.exports = router
