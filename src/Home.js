import { useParams } from 'react-router-dom'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
  const { loading, errorMessage, data } = useFetch(
    ' http://localhost:8000/blogs'
  )

  return (
    <div className='home'>
      {loading ? (
        <div>Loading...</div>
      ) : errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <BlogList blogs={data} title={'All Blogs'} />
      )}
    </div>
  )
}

export default Home
