const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Added query to get all genres, 
  // to be used to display the genre of a selected movie poster.
  const queryText = 'SELECT * FROM genres ORDER BY name ASC';
  pool.query(queryText)
  .then(result => {
    res.json(res.rows);
  }).catch(error => {
    console.error('Error fetching genres', error);
  res.sendStatus(500)
  });
});

module.exports = router;