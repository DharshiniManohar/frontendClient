import React, { useuseState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const CreateUser = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()


  const submit = (e) => {
    e.preventDefault()
    const userData = { name, email, age }
    axios.post('https://backendserver-3-fqw0.onrender.com/CreateUser', userData)
      .then(result => {
        console.log(result)
        navigate('/') // Redirect after successful creation
      })
      .catch(error => {
        console.error('There was an error creating the user!', error)
      })
  }

  return (
    <div>
      <div>
        <form onSubmit={submit}>
          <h2>ADD USER</h2>
          <div>
            <label>Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type='text'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
