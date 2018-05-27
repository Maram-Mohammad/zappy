var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
var app = require('../app.js');
const expect = chai.expect;
var request = require('supertest');
const TwitterController = require('./../app/controllers/twitter.controller');

describe("Sample Unit Testing For Twitter Schema", function () {

    describe('Storing tweets in mongoDB', function () {

        it('should store tweet data', function (done) {
            const testOutput = 'successfully done';

            let result = TwitterController.getTweets();
            expect(result).to.be.not.null;
            expect(result).to.equal(testOutput);
            done();
        });

    });

    describe('Get all tweets in mongoDB', function () {

        it('should get all tweets data', function (done) {

            request(app)
                .get('/tweets')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });


        });

    });
});