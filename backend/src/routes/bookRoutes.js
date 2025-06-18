import express from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create", protectRoute ,createBook);           // Admin only

router.get("/", getAllBooks);           // Public

router.get("/:id", getBookById);        // Public

router.put("/:id", updateBook);         // Admin only

router.delete("/:id", deleteBook);      // Admin only




export default router;
