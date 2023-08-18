import axios from 'axios'
import { useEffect, useState } from 'react'

axios.defaults.baseURL = 'https://opentdb.com/'
const useAxios = (url) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setisLoading] = useState(true)
  useEffect(()=>{
    const fetchData =async()=>{
        await axios.get(url)
        .then(res=> setResponse(res.data))
        .catch(err=> setError(err))
        .finally(()=> setisLoading(false))
    }
    fetchData()
  },[url])
  return  {response, error, isLoading}
}

export default useAxios