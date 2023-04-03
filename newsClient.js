const apiKey = require('./apiKey');

class NewsClient {

  async fetchHeadlines() {
    try {
      // creates and converts date/time and then selects only the first part (date only)
      const today = new Date().toISOString().slice(0, 10);
      // added 'today' parameter
      const url = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&from-date=${today}&api-key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      // easier access to desired properties such as headline
      return data.response.results;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching headlines');
    }
  }

};

module.exports = NewsClient;