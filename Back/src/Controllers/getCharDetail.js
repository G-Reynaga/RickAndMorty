const axios = require("axios");

const getCharDetail = async (req, res) => {
  try {
    const { detailId } = req.params;
    const responde = (
      await axios(`https://rickandmortyapi.com/api/character/${detailId}`)
    ).data;
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
