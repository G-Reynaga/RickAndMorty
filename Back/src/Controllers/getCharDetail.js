const axios = require("axios");
const { URL_CHARACTER_ID } = require("../utils/globalConst");

const getCharDetail = async (req, res) => {
  try {
    const { id } = req.params;
    let url = URL_CHARACTER_ID;
    const responde = (await axios(`${url}${id}`)).data;
    const infoCharDetail = {
      name: responde.name,
      status: responde.status,
      species: responde.species,
      gender: responde.gender,
      origin: responde.origin.name,
      image: responde.image,
    };
    res.status(200).json(infoCharDetail);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  getCharDetail,
};
