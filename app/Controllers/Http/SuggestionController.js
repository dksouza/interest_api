'use strict'

const axios = require("axios");
const uri_fb = "https://graph.facebook.com/v9.0/"

class SuggestionController {
  async index ({params}) {
    const suggestions = await axios.get(uri_fb + `search?type=adinterestsuggestion&interest_list=["${params.value}"]&limit=10000&locale=pt_BR&access_token=847362789373078|GzH0-Em2ROziETnu1pS-JxVjzuA`);
    console.log(suggestions)
    return suggestions.data;
  }
}

module.exports = SuggestionController
