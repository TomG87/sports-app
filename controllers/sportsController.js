const NewsApi = require("newsapi");
const newsapi = new NewsApi("");

const sportsController = {
  getTopHeadlines: async (req, res) => {
    try {
      const response = await newsapi.v2.topHeadlines({
        category: "sports",
        language: "en",
      });

      console.log("Top Headlines Response:", response);
      res.json(response);
    } catch (error) {
      console.error("Error fetching top headlines:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getTopHeadlinesSources: async (req, res) => {
    try {
      const response = await newsapi.v2.sources({
        category: "sports",
        language: "en",
      });

      console.log("Top Headlines Sources Response:", response);
      res.json(response);
    } catch (error) {
      console.error("Error fetching top headlines sources:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  searchNews: async (req, res) => {
    const { query } = req.query;

    try {
      const response = await newsapi.v2.everything({
        q: query,
        category: "sports",
        language: "en",
      });

      console.log("Search News Response:", response);
      res.json(response);
    } catch (error) {
      console.error("Error searching news:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = sportsController;
