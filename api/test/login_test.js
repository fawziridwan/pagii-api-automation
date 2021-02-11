const assert = require('chai').expect;

const page = require('../page/auth/login.js');
const data = require('../data/auth/login.json');

const scenario = {
 "sc01" : "As a HR Role, I should to able to login with valid Credential",
 "sc02" : "As an Unregistered User, I should not be able to login to Pagii",
 "sc03" : "As User, I should not be able to login if email is invalid",
 "sc04" : "As User, I should not be able to login if password is invalid",
 "sc05" : "As User, I should not be able to login if this credential is empty"
}

describe(`Login to Web Pagii CMS`, () => {
 it(`SC01 - ${scenario.sc01}`, async() => {
  const response = await page.auth_login(data.valid_credential);
  assert(response.status).to.equal(200);
  assert(response.body.data.message).to.equal("Login berhasil");
 }),

 it(`SC02 - ${scenario.sc02}`, async() => {
  const response = await page.auth_login(data.unregistered);
  assert(response.status).to.equal(401, response.body.message);
 }),

 it(`SC03 -  ${scenario.sc03}`, async() => {
  const response = await page.auth_login(data.invalid_email);
  assert(response.status).to.equal(400, response.body.message);
 }),

 it(`SC04 - ${scenario.sc04}`, async() => {
  const response = await page.auth_login(data.invalid_password);
  assert(response.status).to.equal(401, response.body.message);
  assert(response.body.data.message).to.equal("Email atau password salah");
 }),

 it(`SC05 - ${scenario.sc05}`, async() => {
  const response = await page.auth_login(data.credential_null);
  assert(response.status).to.equal(400, response.body.message);
 })
}) 