import { db } from "../libs/db.js";

export const createBook = async (req, res) => {
  try {

    if (req.user.role !== "ADMIN") {
        return res.status(403).json({
        error: "Only admin can create books"
        });
    }
    const { title, author, description, price ,genre ,coverImage ,stock } = req.body;

    const newBook = await db.book.create({
      data: {
        title,
        author,
        description,
        price: parseFloat(price),
        genre,
        coverImage,
        stock
      },
    });

    res.status(201).json({ 
        success: true, 
        book: newBook 
    });
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({
         error: "Failed to create book"
    });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await db.book.findMany();
    res.status(200).json({ success: true, books });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

export const getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await db.book.findUnique({
      where: { id },
    });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json({ success: true, book });
  } catch (error) {
    console.error("Error getting book:", error);
    res.status(500).json({ error: "Failed to get book" });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, description, price ,genre ,coverImage ,stock  } = req.body;

  try {
    const updatedBook = await db.book.update({
      where: { id },
      data: { title, author, description, price: parseFloat(price) ,genre ,coverImage ,stock },
    });

    res.status(200).json({ success: true, book: updatedBook });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ error: "Failed to update book" });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    await db.book.delete({
      where: { id },
    });

    res.status(200).json({ success: true, message: "Book deleted" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ error: "Failed to delete book" });
  }
};
