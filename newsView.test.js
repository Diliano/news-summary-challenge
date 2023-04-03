/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsClient = require('./newsClient');
const NewsView = require('./newsView');

jest.mock('./newsClient');

describe('NewsView', () => {

  let client;
  let view;

  beforeEach(() => {
    NewsClient.mockClear();
    document.body.innerHTML = fs.readFileSync('./index.html');
    client = new NewsClient();
    view = new NewsView(client);
  })

  it('displays headlines', async () => {
    const headlines = [
      { fields: { headline: 'Headline test', thumbnail: 'http://test.com/image.png' }},
      { fields: { headline: 'Headline tester', thumbnail: 'http://test.com/image2.png' }},
    ];

    client.fetchHeadlines.mockResolvedValueOnce(headlines);

    await view.displayHeadlines();

    const headlineEls = document.querySelectorAll('.headline');
    expect(headlineEls.length).toBe(2);

    expect(headlineEls[0].querySelector('h2').textContent).toBe('Headline test');
    expect(headlineEls[0].querySelector('img').getAttribute('src')).toBe('http://test.com/image.png');
  });

});