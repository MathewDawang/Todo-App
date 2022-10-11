
let express = require("express"),
controller = require("../controller/todo"),
router = express.Router();
router.route("/todo")
    .get(controller.getAllTodos)
    .post(controller.createTodo);

router.route("/:todo")
    .get(controller.getOneTodo)
    .patch(controller.updateTodo)
    .delete(controller.deleteTodo);

    module.exports = router
