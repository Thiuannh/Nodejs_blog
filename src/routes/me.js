const express = require('express');
const router = express.Router();

const MeController = require('../app/controllers/MeController');


router.get('/store/courses', MeController.storedCourses);
router.get('/trash/courses',MeController.strashCourses);

module.exports = router;