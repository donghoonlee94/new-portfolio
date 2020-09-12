import express from "express";
import skil from '../mock/skil.json';


const router = express.Router();

router.get('/', (req, res, next) => {
  res.send(skil);
});

export default router;
