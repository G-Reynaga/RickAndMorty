const express = require("express");
const router = express.Router();
const { getCharById } = require("../Controllers/getCharById");
const { getCharDetail } = require("../Controllers/getCharDetail");

let fav = [];

router.get("/character/:id", getCharById);

router.get("/detail/:detailId", getCharDetail);

//Favoritos
router.post("/fav", (req, res) => {
  fav.push(req.body);
  res.status(200).send("Se guardaron Correctamente los datos favoritos");
});

router.get("/fav", (req, res) => {
  res.status(200).json(fav);
});

router.delete("/fav/:id", (req, res) => {
  const { id } = req.params;
  const favFiltered = fav.filter((char) => char.id !== Number(id));
  fav = favFiltered;
  res.status(200).send("Se eliminaron los datos favoritos");
});

module.exports = router;
