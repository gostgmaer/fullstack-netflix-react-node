const express = require("express");
const contactsRoute = express.Router();
const {
  create,
  getData,
  getSingleRecord,
  remove,
  removeMany,
  update,
} = require("../controller/contacts/controller");
const createMiddleWare = require("../middleware/createMiddleWare");
const userMiddleWare = require("../middleware/userAccess");

contactsRoute.route("/contacts").post(createMiddleWare, create);
contactsRoute.route("/contacts").get(getData);
contactsRoute.route("/contacts/:id").get(getSingleRecord);
contactsRoute.route("/contacts/:id").patch(update);
contactsRoute.route("/contacts/:id").put(update);
contactsRoute.route("/contacts/:id").delete(remove);
contactsRoute.route("/contacts/bulk").delete(removeMany);
module.exports = contactsRoute;

