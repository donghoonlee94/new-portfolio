import express from "express";
import movies from '../movies.json';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(movies);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const movie = movies.filter(movie => {
    return movie.id === id
  });
  res.send(movie);
});

export default router;

