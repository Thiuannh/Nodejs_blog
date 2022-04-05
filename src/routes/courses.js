const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CoursesController');


router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/hendle-form-actions', courseController.hendleFormActions);
router.put('/:id', courseController.updata);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);



router.get('/:slug', courseController.show);


module.exports = router;