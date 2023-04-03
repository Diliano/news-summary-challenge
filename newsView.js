const NewsClient = require('./newsClient');

class NewsView {

  constructor(client) {
    this.client = client;

    this.headlineContainerEl = document.querySelector('#headline-container')
  }

  async displayHeadlines() {
    try {
      const headlines = await this.client.fetchHeadlines();
      headlines.forEach(headline => {
        const headlineEl = document.createElement('div');
        headlineEl.className = 'headline';
        headlineEl.innerHTML = `
          <h2><a href="${headline.webUrl}" target="_blank">${headline.fields.headline}</a></h2>
          <img src="${headline.fields.thumbnail}">
        `;
        this.headlineContainerEl.append(headlineEl);
      });
    } catch (error) {
      console.error(error);
      throw new Error('Unable to display headlines');
    }
    
  }

};

module.exports = NewsView;