const NewsApi = require("newsapi");
const newsapi = new NewsApi('');

const sportsController = {

  getTopHeadlines: async (req, res) => {
    try {
      const response = await newsapi.v2.topHeadlines({
        sources: 'bbc-news,the-verge',
        q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us',
      });

      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error; 'Internal Server Error' })    
    }
  },

  searchNews: async (req, res) => {
    const { query } = req.query;

    try {
      const response = await newsapi.v2.everything({
        q: query, // User-provided search query
        category: 'sports', // Specify sports category
        language: 'en',
      });

      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Additional methods as needed
};

module.exports = sportsController;
