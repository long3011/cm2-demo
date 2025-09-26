const {
    getAllJobs,
    createJob,
    getJobById,
    updateJob,
    deleteJob
} = require("../controllers/jobControllers");
const requireAuth = require("../middleware/requireAuth");
const express = require("express");
const router = express.Router();

// GET /jobs - Retrieve all jobs
router.get("/", getAllJobs);

// POST /jobs - Create a new job
router.post("/", requireAuth, createJob);

// GET /jobs/:id - Retrieve a job by ID
router.get("/:id", getJobById);

// PUT /jobs/:id - Update a job by ID
router.put("/:id", requireAuth,  updateJob);

// DELETE /jobs/:id - Delete a job by ID
router.delete("/:id", requireAuth, deleteJob);

module.exports = router;