const request = require("supertest");
const app = require("./app");

describe("TEST GET API", () => {
  it("get api", async () => {
    const info = await request(app).get("/api/get");
    expect(info.status).toBe(200);
  });
});

// describe("TEST POST API", () => {
//   it("add data to database", async () => {
//     const info = await request(app).post("/api/add").send({ text: "__TEST__" });
//     expect(info.status).toBe(200);
//   });
// });

// describe("TEST DELETE API", () => {
//   it("delete test data a few minute ago", async () => {
//     const info = await request(app)
//       .delete("/api/del")
//       .send({ test: "__TEST__" });
//     expect(info.status).toBe(200);
//   });
// });
