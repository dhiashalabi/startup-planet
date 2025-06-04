import express from "express";
import getAllData from "../controllers/get-all-data.js";
import getStartupsByPathParams from "../controllers/get-data-by-path-params.js";

const router = express.Router();

// Get all startups with filtering
router.get("/", (req, res) => getAllData(req, res));

// Search startups by field and term
router.get("/search/:field/:term", (req, res) =>
  getStartupsByPathParams(req, res)
);

export default router;
