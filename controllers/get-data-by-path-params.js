import { startups } from "../data/data.js";

const getStartupsByPathParams = (req, res) => {
  try {
    const { field, term } = req.params;
    const allowedFields = ["industry", "country", "continent"];

    if (!allowedFields.includes(field)) {
      return res.status(400).json({ error: "Invalid field" });
    }

    const filteredStartups = startups.filter((startup) =>
      startup[field].toLowerCase().includes(term.toLowerCase())
    );

    return res.json(filteredStartups);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

export default getStartupsByPathParams;
