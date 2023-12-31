var app = require("../app");
describe("plain text response", function () {
    it("returns a plain text response", function (done) {
        // ...
    });
    it("returns your User Agent", function (done) {
        // ...
    });
});

it("returns a plain text response", function (done) {
    supertest(app)
        .get("/")
        .set("User-Agent", "my cool browser")
        .set("Accept", "text/plain")
        .expect("Content-Type", /text\/plain/)
        .expect(200)
        .end(done);
});

it("returns your User Agent", function (done) {
    supertest(app)
        .get("/")
        .set("User-Agent", "my cool browser")
        .set("Accept", "text/plain")
        .expect(function (res) {
            if (res.text !== "my cool browser") {
                throw new Error("Response does not contain User Agent");
            }
        })
        .end(done);
});



// none duplicates

describe("plain text response", function () {
    var request;
    beforeEach(function () {
        request = supertest(app)
            .get("/")
            .set("User-Agent", "my cool browser")
            .set("Accept", "text/plain");
    });
    it("returns a plain text response", function (done) {
        request
            .expect("Content-Type", /text\/plain/)
            .expect(200)
            .end(done);
        it("returns your User Agent", function (done) {
            request
                .expect(function (res) {
                    if (res.text !== "my cool browser") {
                        throw new Error("Response does not contain User Agent");
                    }
                });
        })
            .end(done);
    });
});
