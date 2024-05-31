import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
//styles
import './Login.css'

export default function Login() {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const { login, isPending, error } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(Email, Password)
  }

 return(
  <form onSubmit={handleSubmit} className="auth-form">
  <h2>Login</h2>
  <label>
    <span>Email:</span>
    <input
      required 
      type="Email" 
      onChange={(e) => setEmail(e.target.value)} 
      value={Email}
    />
  </label>
  <label>
    <span>Password:</span>
    <input
      required
      type="Password" 
      onChange={(e) => setPassword(e.target.value)} 
      value={Password}
    />
  </label>
 {!isPending && <button className="btn">Login</button>}
  {isPending && <button className="btn" disabled>loading</button>}
  {error && <div className="error">{error}</div>} 

</form>
     )
}
