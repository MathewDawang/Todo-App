let expresss = require("express"),
Router = express.Router();
Router.route("/todo")
    .get()
    .post();

Router.route("/:todo")
    .get()
    .patch()
    .delete()
