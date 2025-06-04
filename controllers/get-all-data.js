import { startups } from "../data/data.js";

const getAllData = (req, res) => {
  try {
    let filteredStartups = startups;
    const { industry, country, continent, is_seeking_funding, has_mvp } =
      req.query;

    if (industry) {
      filteredStartups = filteredStartups.filter(
        (startup) => startup.industry.toLowerCase() === industry.toLowerCase()
      );
    }

    if (country) {
      filteredStartups = filteredStartups.filter(
        (startup) => startup.country.toLowerCase() === country.toLowerCase()
      );
    }

    if (continent) {
      filteredStartups = filteredStartups.filter(
        (startup) => startup.continent.toLowerCase() === continent.toLowerCase()
      );
    }

    if (is_seeking_funding) {
      filteredStartups = filteredStartups.filter(
        (startup) =>
          startup.is_seeking_funding === JSON.parse(is_seeking_funding)
      );
    }

    if (has_mvp) {
      filteredStartups = filteredStartups.filter(
        (startup) => startup.has_mvp === JSON.parse(has_mvp)
      );
    }

    res.json(filteredStartups);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

export default getAllData;
