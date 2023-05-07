const request = require('supertest');
const server = require('../server');

afterAll(done => {
    server.close();
    done();
});
describe("GET /", () => {
    it("should respond with status code 200",  done => {
        request(server).get('/').expect(200, done);
    });
    it("should return a json reponse", done => {
        request(server).get('/').expect('Content-Type', /plain/, done);
    });
});