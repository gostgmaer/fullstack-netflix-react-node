

const express = require("express");
const projectsRoute = express.Router();
const {
  create,
  getData,
  getSingleRecord,
  remove,
  removeMany,
  update,
} = require("../controller/projects/controller");
const createMiddleWare = require("../middleware/createMiddleWare");
const userMiddleWare = require("../middleware/userAccess");

projectsRoute.route("/projects").post(createMiddleWare, create);
projectsRoute.route("/projects").get(getData);
projectsRoute.route("/projects/:id").get(getSingleRecord);
projectsRoute.route("/projects/:id").patch(update);
projectsRoute.route("/projects/:id").put(update);
projectsRoute.route("/projects/:id").delete(remove);
projectsRoute.route("/projects/bulk").delete(removeMany);
module.exports = projectsRoute;
