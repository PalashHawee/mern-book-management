import Book from '../model/book.model.js'

export const getBook = async (req, res) => {
    try {
      const book = await Book.find()
      if (!book) return res.status(200).json({ message: 'Book not found' })
      res.json(book)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
}