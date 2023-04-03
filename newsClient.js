const apiKey = require('./apiKey');

class NewsClient {

  async fetchHeadlines() {
    const today = new Date().toISOString().slice(0, 10);
    const url = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&from-date=${today}&api-key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    return data.response.results;
  }

};

module.exports = NewsClient;