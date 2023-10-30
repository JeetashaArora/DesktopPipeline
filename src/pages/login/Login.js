//Importing the hooks
import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { useNavigate } from 'react-router-dom'

// styles
import './Login.css'
/**
 * Login Component
 *
 * This component represents a login form where users can enter their email and password
 * to log in. It utilizes state management, hooks, and React Router for navigation.
 */
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()
  const navigate = useNavigate()

  /**
  * This function handes form submission
  *
  * @param {Event} e - The form submission event
  */
  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  /**
   * Handle "Forgot Password" button click
   * Navigates to the password reset page.
   *
   * @param {Event} e - The button click event
   */
  const handleReset = async(e)=>{
    navigate("/reset")
  }
  //returning the template
  return (
    // After the user submits the form handleSubmit function will be executed
    <form onSubmit={handleSubmit} className="auth-form">
      {/* Loginlabel */}
      <h2>login</h2>
      {/* Input for Email */}
      <label>
        <span>email:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      {/* Input for Password */}
      <label>
        <span>password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <button className="btn">Log in</button>}
      {!isPending && <button className="btn resetbtn" onClick={handleReset}>Forgot Password</button>}
      {isPending && <button className="btn" disabled>loading</button>}
      {/* Displaying the error if any */}
      {error && <div className="error">{error}</div>}
    </form>
  )
}