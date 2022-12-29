const express = require('express');
const router = express.Router();

const {getTaskList} = require('../controllers/tasksController');

// Definimos la ruta donde se hará el GET
router.route('/tasks').get(getTaskList);

module.exports = router;