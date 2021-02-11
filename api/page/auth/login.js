const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.SERVER);

const auth_login = (payload) => api.post('/api/v1/auth/login')
 .set('Content-Type', 'application/json')
 .set('Accept', 'application/json')
 .set('platform', 'mobile')
 .set('token', ('Bearer'+process.env.TOKEN))
 .send(payload);

module.exports = {
 auth_login,
}