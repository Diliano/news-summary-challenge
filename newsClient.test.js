const NewsClient = require('./newsClient');

require('jest-fetch-mock').enableMocks()

describe('NewsClient', () => {

  it('fetches and returns todays headlines', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      response: {
        results: [
          { fields: { headline: 'Headline test'}},
          { fields: { headline: 'Headline tester'}},
        ],
      },
    }));

    const newsClient = new NewsClient();
    const headlines = await newsClient.fetchHeadlines();

    expect(headlines).toEqual([
      { fields: { headline: 'Headline test'}},
      { fields: { headline: 'Headline tester'}},
    ]);
  });

});