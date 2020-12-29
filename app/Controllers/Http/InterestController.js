'use strict'

const axios = require("axios");
const uri_fb = "https://graph.facebook.com/v9.0/"

class InterestController {

  async index ({ params }) {
    const interests = await axios.get(uri_fb + `search?type=adinterest&q=${params.value}&limit=10000&locale=pt_BR&access_token=847362789373078|GzH0-Em2ROziETnu1pS-JxVjzuA`);
    return interests.data;
  }

}

module.exports = InterestController
