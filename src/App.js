import { useState } from 'react'
import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([])

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 999),
        title,
      },
    ]

    setBooks(updatedBooks)
  }

  const editBook = () => {}
  const deleteBook = () => {}

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App
