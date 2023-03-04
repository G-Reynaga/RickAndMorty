const server = require("../Routes/server");
const session = require("supertest");
const agent = session(server);

describe("Test de Rutas", () => {
  describe("GET rickandmorty/character/{id}", () => {
    it("Responde con status 200", () => {
      agent.get("/rickandmorty/character/1").expect(200);
    });
    it("Responde un objeto con las propiedades: id, name, species, gender e image", () => {
      agent.get("/rickandmorty/character/1").then((res) => {
        expect(res.body).toEqual({
          id: 1,
          name: "Rick Sanchez",
          species: "Human",
          gender: "Male",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        });
      });
    });
    it('Si hay un error responde con status: 500', () => {
        agent.get('/rickandmorty/character/IDqueNoExiste').expect(500)
    })
  });
  describe("Get rickandmorty/detail/{detailId}", () => {
    it('Responde con un status 200',() => {
        agent.get('/rickandmorty/detail/1').expect(200)
    })
  })
});
