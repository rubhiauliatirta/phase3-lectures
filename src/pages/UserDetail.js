import React, {useState ,useEffect} from 'react'
import { 
  useParams
} from 'react-router-dom'


export default (props) => {
  const { userId } = useParams()
  const [ user, setUser ] = useState({})
  const [ loading, setLoading ] = useState(false)

  useEffect(()=> {
    console.log("masuk use Effect")
    setLoading(true)
    fetch(`http://localhost:3001/people/${userId}`)
    .then(response => response.json())
    .then(data => {
      setUser(data)
    })
    .catch(console.log)
    .finally( _=> setLoading(false))
  }, [userId])

  if (loading) return <h3>Loading user....</h3>

  return (
    <>
      <div>id : {user.id}</div>
      <div>name : {user.name}</div>
      <div>gender : {user.gender}</div>
      <div>company : {user.company}</div>
    </>
  )
}