const express = require("express");
const router = require("express").Router();

const HasRole = require("../helper/role");

const upload = require("../config/multer");

router.use(express.json());

//Import Category Controller

const categoryCtrl = require("../controllers/category");
const isLoggedIn = require("../helper/isLoggedIn");

//Routes

router.post(
  "/add",
  isLoggedIn,
  HasRole("admin"),
  upload.single("image"),
  categoryCtrl.category_create_post
);

router.get("/index", categoryCtrl.category_index_get);
router.delete("/delete", categoryCtrl.category_delete_get);
router.get("/edit", categoryCtrl.category_edit_get);
router.put("/update", upload.single("image"), categoryCtrl.category_update_put);

//Export
module.exports = router;
