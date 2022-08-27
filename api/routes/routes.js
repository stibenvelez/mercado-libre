
import express from "express";
import { getItem, getItems } from "../controllers/items.constrollers.js";
const router = express.Router();

router.get("/items", getItems);
router.get("/items/:id", getItem);

export default router;
