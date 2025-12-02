const express = require("express");
const router = express.Router();
const {
  createBook,
  getBooks,
  getBook,
} = require("../controllers/bookController");

router.post("/", createBook);

router.get("/", getBooks);

router.get("/:id", getBook);

module.exports = router;
