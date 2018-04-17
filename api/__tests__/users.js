const request = require('supertest');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const database = require('../database');


// Configure app to use bodyParser
// This will let us get the data from a POST.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes for our API.
const router = express.Router();

// Load our routes.
require('../routes/users')(router);

app.use('/api', router);


describe('User Service Test.', () => {
  let userData;

  beforeAll((done) => {
    database.connect(database.modeTest, done);

    userData = {
      name: 'John',
      surname: 'Doe',
      country: 'ar',
      birthday: '05/07/2003'
    };
  });

  it('GET /users and respond with JSON', (done) => {
    request(app)
      .get('/api/users')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        return done();
      });
  });

  it('POST /users and create one.', (done) => {
    request(app)
      .post('/api/users')
      .set('Accept', 'application/json')
      .send(userData)
      .expect(200)
      .end((err, usersResponse) => {
        const result = usersResponse.body;

        expect(err).toBe(null);
        expect(result).toBeTruthy();
        expect((typeof result)).toBe('object');
        expect(result.length).not.toBe(0);

        done();
      });
  });

  it('GET /users/:id and retrieve one.', (done) => {
    request(app)
      .get('/api/users')
      .expect(200)
      .end((err, usersResponse) => {
        const results = usersResponse.body;

        // eslint-disable-next-line no-underscore-dangle
        const uid = results[0]._id;

        request(app)
          .get(`/api/users/${uid}`)
          .expect(200)
          .end((err2, result) => {
            expect(err2).toBe(null);
            expect(result).toBeTruthy();
            expect((typeof result)).toBe('object');
            expect(result.length).not.toBe(0);

            done();
          });
      });
  });

  it('PUT /users/:id and update one.', (done) => {
    request(app)
      .get('/api/users')
      .expect(200)
      .end((err, usersResponse) => {
        const results = usersResponse.body;

        // eslint-disable-next-line no-underscore-dangle
        const uid = results[0]._id;

        request(app)
          .get(`/api/users/${uid}`)
          .expect(200)
          .end((err2, userResp) => {
            const contentResult = userResp.body;

            const tmpName = 'John (edit)';
            const tmpSurname = '- (edit)';

            contentResult.name = tmpName;
            contentResult.surname = tmpSurname;

            request(app)
              .put(`/api/users/${uid}`)
              .set('Accept', 'application/json')
              .send(contentResult)
              .expect(200)
              .end((err3, putResponse) => {
                const { user } = putResponse.body;

                expect(err3).toBe(null);
                expect(user).toBeTruthy();
                expect((typeof user)).toBe('object');
                expect(user.length).not.toBe(0);
                expect(user).toHaveProperty('name');
                expect(user).toMatchObject({
                  name: tmpName,
                  surname: tmpSurname
                });

                done();
              });
          });
      });
  });

  it('DELETE /users/:id and remove one.', (done) => {
    request(app)
      .get('/api/users')
      .expect(200)
      .end((err, usersResponse) => {
        if (err) return done(err);

        const results = usersResponse.body;
        // eslint-disable-next-line no-underscore-dangle
        const uid = results[0]._id;

        request(app)
          .delete(`/api/users/${uid}`)
          .expect(200)
          .end((err2, result) => {
            expect(result.body).toEqual({
              message: 'user.deleted_successfully'
            });

            done();
          });

        return null;
      });
  });
});
