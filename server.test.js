const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');




// describe("Test the root path", () => {
// test("It should response the POST method", () => {
// const response = request(app).post("http://localhost:8000/User/add").send ({
// "Name": "Obaid",
// "Email": "obaid",

// "Contact": 123
// })
// expect(response.statusCode).toBe(200);
// })
//})
test.todo('It should response the GET method'), () => {
    const response = request(app).post("http://localhost:3001/users/add").json({
        Name: "LAiba",
        Email: "iuiytrfidkjnmbx",
        Age: 20,
        Contact: 1234567890
})
expect(response.statusCode).toBe(600);
};