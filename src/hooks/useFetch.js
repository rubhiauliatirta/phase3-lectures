import {useState, useEffect} from 'react';

export default function useFetch(url) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=> {
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => setError(err))
    .finally( _ => setLoading(false))
  }, [])

  function post(newData){

    setLoading(true)
    let option = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    }

    fetch("http://localhost:4000/students", option)
    .then(res => res.json())
    .then(responseData => {
      setData(data.concat(responseData))
    })
    .catch(err => setError(err))
    .finally(_ => setLoading(false))

  }

  return {
    data, loading, error, post
  }
}
