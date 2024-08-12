import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {
  const { id } = useParams() // Use useParams to get the `id` from the URL
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://backendserver-3-fqw0.onrender.com/getUser/${id}`)
      .then(result => {
        console.log(result)
        const user = response.data
        setName(user.name)
        setEmail(user.email)
        setAge(user.age)
      })
      .catch(error => {
        console.error('There was an error fetching the user data!', error)
      })
  }, [id])
  const Update = (e) => {
    e.preventDefault();
    axios.put(`/${id}`,{name,email,age})
    .then(result => {
        console.log(result)
        navigate('https://backendserver-3-fqw0.onrender.com/')
    })
    .catch(err=>console.log(err))
}

return (
  <div>
      <div>
          <form onSubmit={Update}>
              <h2>Update User</h2>
              <div>
                  <label>Name</label>
                  <input type='text' value={name}  onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div>
                  <label>Email</label>
                  <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div>
                  <label>Age</label>
                  <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}/>
              </div>
              <button>update</button>
          </form>
      </div>
  </div>
)
}

export default UpdateUser