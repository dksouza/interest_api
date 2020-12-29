'use strict'

class AuthController {
  async authenticate({ request, response, auth }) {
    const {username, password} = request.all();
    const token = auth.attempt(username, password);

    return token;
  }
}

module.exports = AuthController
