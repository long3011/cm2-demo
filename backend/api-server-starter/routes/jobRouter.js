const {
    getAllJobs,
    createJob,
    getJobById,
    updateJob,
    deleteJob
} = require("../controllers/jobControllers");
const express = require("express");
const router = express.Router();

// GET /jobs - Retrieve all jobs
router.get("/", getAllJobs);

// POST /jobs - Create a new job
router.post("/", createJob);

// GET /jobs/:id - Retrieve a job by ID
router.get("/:id", getJobById);

// PUT /jobs/:id - Update a job by ID
router.put("/:id", updateJob);

// DELETE /jobs/:id - Delete a job by ID
router.delete("/:id", deleteJob);

module.exports = router;