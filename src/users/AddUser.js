import React, { useState } from 'react'

export default function AddUser() {
    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    })

    const{name,username,email}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }

  return (
    <div className='container'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'  >
            <h2 className='text-center m-4'>Register User</h2>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                    Name
                </label>
                <input type={"text"} className='form-control' placeholder='Enter your Name' name='name' value={name} onChange={(e)=>onInputChange(e)}/>
            </div>


            {/* user name */}
            <div className='mb-3'>
                <label htmlFor='Username' className='form-label'>
                    Username
                </label>
                <input type={"text"} className='form-control' placeholder='Enter your Username' name='username' value={username} onChange={(e)=>onInputChange(e)}/>
            </div>

            {/* Email */}
            <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>
                    Email
                </label>
                <input type={"text"} className='form-control' placeholder='Enter your Email' name='email'  value={email} onChange={(e)=>onInputChange(e)} />
                 
            </div>
            <button type='submit' className='btn btn-outline-primary' >Submit</button>
            <button type='submit' className='btn btn-outline-danger mx-2' >Cancel</button>

        </div>
        
    </div>
  )
}
