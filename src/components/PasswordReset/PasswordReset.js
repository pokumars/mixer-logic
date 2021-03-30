import React, { useState } from 'react';
import './PasswordReset.css'
import { useHistory } from 'react-router-dom'

import loginService from '../../services/loginService'

const PasswordReset = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory()

  const handlePasswordReset = (event) => {
    event.preventDefault();
     loginService.resetPassword(password).then(response => {
       if(response.status = 200) {
         console.log('redirect them after getting a successful password change');
         history.push(`/`)
       }
     })
  }

  return (
    <div className="password-reset">
      <h1>Password reset page</h1>
      <form className="password-reset-form" onSubmit={handlePasswordReset} data-testid="password-reset-form">
      <p className="hint">When the password and confirm password match, the 'Change Password' button will be enabled.</p>
        <label for="fname">Password</label><br />
        <input type="password" id="password" name="password"
          value={password} onChange={(evt) => setPassword(evt.target.value)} /><br />
        
        <label for="lname">Confirm Password</label><br />
        <input type="password" id="confirm" name="confirm"
          value={confirmPassword} onChange={(evt) => setConfirmPassword(evt.target.value)} /><br /><br />
        {password !== confirmPassword && <p className="hint">The password does not match the confirm passowrd</p>}
        <input type="submit" value="Change Password" disabled={password !== confirmPassword || confirmPassword.length == 0 || password.length == 0 } />
      </form>
    </div>
  )
}

export default PasswordReset;
