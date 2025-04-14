const express = require("express");
const jobController = require("../controllers/job.controller");

const router = express.Router();

router.post("/", jobController.createjob);
router.get("/", jobController.getAlljobs);
router.get("/:id", jobController.getjobById);
router.put("/:id", jobController.updatejob);
router.delete("/:id", jobController.deletejob);

module.exports = router;
