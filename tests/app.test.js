const app = require('../server/app');
const supertest = require('supertest');
const request = supertest(app);
const testRoute = '/bee-manager';

describe('API Test', () => {
  it('Test GET Response', () => {
    request.get(testRoute).then(resp => {
      expect(resp.body).toEqual({});
    });
  });
});
