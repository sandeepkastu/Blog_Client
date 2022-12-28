import React from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <div>
    <label htmlFor='email'>Email</label><br/>
    <input id='email' type='email'/><br/><br/>
    <label htmlFor='password'>Password</label><br/>
    <input id='password' type='password'/><br/><br/>
    <label htmlFor='password'>Confirm Password</label><br/>
    <input id='password' type='password'/><br/><br/>
    <button>Signup</button>
    <br/><br/>
    <Link to='/'>Do you have Account? Login</Link>
    </div>
  )
}
