const apiKey = require('./apiKey');
const NewsClient = require('./newsClient');
const NewsView = require('./newsView');

const client = new NewsClient();
const view = new NewsView(client);

//view.displayHeadlines();