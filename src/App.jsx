import React, { useState, useEffect } from 'react'

function App() {
  const [quote, setQuote] = useState({ text: '', author: '' })
  const [loading, setLoading] = useState(true)

  const fetchQuote = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://dummyjson.com/quotes/random')
      const data = await response.json()
      if (data) {
        setQuote({ text: data.quote, author: data.author })
      }
    } catch (error) {
      console.error('Error fetching quote:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <div className="quote-container">
      <div className="content-wrapper">
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-author">- {quote.author}</p>
            <button onClick={fetchQuote}>Get New Quote</button>
          </>
        )}
      </div>
    </div>
  )
}

export default App
