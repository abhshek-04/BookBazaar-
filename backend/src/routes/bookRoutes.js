import express from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create", authMiddleware ,createBook);           // Admin only

router.get("/", authMiddleware ,getAllBooks);           // Public

router.get("/:id", authMiddleware ,getBookById);        // Public

router.put("/:id", authMiddleware ,updateBook);         // Admin only

router.delete("/:id",authMiddleware , deleteBook);      // Admin only




export default router;
