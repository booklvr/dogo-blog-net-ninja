import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = ({ match }) => {
  const { id } = useParams()
  const { loading, errorMessage, data: blog } = useFetch(
    `http://localhost:8000/blogs/${id}`
  )
  const history = useHistory()

  const deleteHandler = async (id) => {
    try {
      await fetch(`http://localhost:8000/blogs/${id}`, { method: 'DELETE' })
      history.push('/')
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <div className='blog-details'>
      {loading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={() => deleteHandler(blog.id)}>delete</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
