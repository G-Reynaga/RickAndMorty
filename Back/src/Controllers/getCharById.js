const axios = require("axios");

// const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = response.data;
    const infoChar = {
      id: data.id,
      name: data.name,
      image: data.image,
      species: data.species,
      gender: data.gender,  
    };
    res.status(200).json(infoChar);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  getCharById,
};
