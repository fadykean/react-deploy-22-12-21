import './login.css'
import React from 'react'

function Login() {
  return (
    <form className='wrap'> 
      <div className='namee'>
        <input  type="text"placeholder='First Name' autofocus />
        <input type="text"placeholder='Last Name' />
      </div>
      <div className='info'>
        
        <input type="number" id="age" name="age" className='age' step="1" placeholder='62+'/>


              <input type="tel" placeholder='Phone Number' className='phone'  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />

              <select className='selected' name="option">
                  <option value="" disabled selected>Your Country</option>
                  <option value="1">Israel</option>
                  <option value="2">Israel</option>
                  <option value="3">Israel</option>
              </select>
        </div>
      <div className='email'>
        <input type="email" className='mail' autocomplete="off" placeholder='Mail Address' />
      </div>

      <div className='pass'>
        <input type="text" className='password' placeholder='password' />
        <input type="text" className='confirmPassword' placeholder='Confirm Password' />
      </div>



      <div className='yourself'>
        <label className='about' for="story"  >Tell us about yourself</label>
        <textarea className='story' id="story" name="story" rows="5" cols="33" placeholder='Tell us about yourself'>
        </textarea>
          
      </div>





      <div className='agree'>

        <input  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label  for="vehicle1"> I agree </label>
      </div>
      <div className='btn-btn'>
        <input className='lin' type="submit" value="Login" /> 
        <input className='sfree'  type="submit" value="Start for free" /> 

      </div>
    </form>
  )
}

export default Login;