import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    // avoid error of navigating to new page while still fetching data
    const abortController = new AbortController()

    // IIAAFE immediately invoked async await function expression
    ;(async () => {
      try {
        // attach abortCont to fetch call
        const response = await fetch(url, { signal: abortController.signal })
        if (!response.ok)
          throw new Error('could not load the data for this resource')
        const data = await response.json()
        setData(data)
        setLoading(false)
        setErrorMessage(null)
      } catch (error) {
        // only return errors if not abortControll error
        if (abortController.signal.aborted) {
          console.log('fetch aborted')
        } else {
          console.log(error)
          setErrorMessage(error.message)
          setLoading(false)
        }
      }
    })()

    // useEffect cleanup function
    return () => {
      abortController.abort()
    }
  }, [url])

  return { data, loading, errorMessage }
}
export default useFetch
