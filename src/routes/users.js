const express = require("express");

const router = express();

router.get("/users", (req, res) => {
  res.json({
    message: "Get user succes",
  });
});
