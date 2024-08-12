import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    // const [user,setUser] = useState([{
    //     name:"abc",email:"abc@gmail.com",age:0
    // }])
    const [user, setUser] = useState([])

    useEffect(()=>{
        axios.get('https://backendserver-3-fqw0.onrender.com/')
        .then(result => setUser(result.data))
        .catch(err=>console.log(err))
    },[])

    const handleDelete = (id) => {
        axios.delete(`https://backendserver-3-fqw0.onrender.com/${id}`)
        .then(res => {console.log(res)
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
                        user.map((user)=>{
                          return  <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`}>Update</Link>
                                    <button onClick={(e)=>handleDelete(user._id)}>Delete</button>
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

export default User