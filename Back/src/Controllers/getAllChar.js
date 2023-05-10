const axios = require("axios");
const { URL_CHARACTER_ID } = require("../utils/globalConst");

const getAllChar = async (req, res) => {
  try {
    const promises = [];
    let url = URL_CHARACTER_ID;
    const { data } = await axios(`${url}`);
    promises.push(...data.results);

    const resultsPromises = await Promise.all(
      promises.map(async (promise) => {
        const res = await axios(promise.url);
        return res.data;
      })
    );
    const char = resultsPromises.map((character) => {
      return {
        id: character.id,
        name: character.name,
        image: character.image,
        species: character.species,
        gender: character.gender,
        status: character.status,
      };
    });
    res.status(200).json(char);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports = {
  getAllChar,
};
