import express from "express";
import Loan from "../models/Loan.js";

const router = express.Router();

/*
 * GET /api/loans
 *
 * Return all mortgage loans.
 */
router.get("/", async (req, res) => {
  try {
    const loans = await Loan.find().sort({
      createdAt: -1
    });

    res.json({
      success: true,
      count: loans.length,
      data: loans
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to retrieve loans"
    });
  }
});

/*
 * GET /api/loans/:loanNumber
 */
router.get("/:loanNumber", async (req, res) => {
  try {
    const loan = await Loan.findOne({
      loanNumber: req.params.loanNumber
    });

    if (!loan) {
      return res.status(404).json({
        success: false,
        message: "Loan not found"
      });
    }

    res.json({
      success: true,
      data: loan
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to retrieve loan"
    });
  }
});

/*
 * POST /api/loans
 */
router.post("/", async (req, res) => {
  try {
    const loan = await Loan.create(req.body);

    res.status(201).json({
      success: true,
      data: loan
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

export default router;