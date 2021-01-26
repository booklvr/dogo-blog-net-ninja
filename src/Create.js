import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('mario')
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body, author }),
    }

    try {
      const fetchResponse = await fetch('http://localhost:8000/blogs', config)
      const response = await fetchResponse.json()
      if (response) {
        setLoading(false)
        history.push('/')
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={onSubmitHandler}>
        <label>Blog Title:</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Blog title:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>BlogAuthor</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        {!loading ? (
          <button>Add Blog</button>
        ) : (
          <button disabled>Adding Blog...</button>
        )}
      </form>
    </div>
  )
}

export default Create
