import React from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div>
        <label htmlFor='email'>Email</label><br/>
        <input id='email' type='email'/><br/><br/>
        <label htmlFor='password'>Password</label><br/>
        <input id='password' type='password'/><br/><br/>
        <button>LOGIN</button>
          <br/><br/>
        <Link to='/signup'>Don't have account? Signup</Link>
    </div>
  )
}
