import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://backendserver-3-fqw0.onrender.com/getUsers') // Corrected API endpoint
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete(`https://backendserver-3-fqw0.onrender.com/deleteUser/${id}`)
      .then(res => {
        console.log(res)
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
        <div>
            <Link to="/create">Add+</Link>
            <div className='table'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>age</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((users)=>{
                          return  <tr>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.age}</td>
                                <td>
                                    <Link to={`/update/${users._id}`}>Update</Link>
                                    <button onClick={(e)=>handleDelete(users._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </div>
        </div>
    </div>
  )
}

export default Users