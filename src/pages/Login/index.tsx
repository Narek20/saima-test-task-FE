import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../services/user.service'
import { Title } from '../../components/shared/Title'
import { Input } from '../../components/shared/Input'
import { Button } from '../../components/shared/Button'

import styles from './styles.module.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (email && password) {
      const data = await login(email, password)

      if (!data.success) {
        setErrorMessage(data.message)
        return
      }

      localStorage.setItem('token', data.token)
      navigate('/')
    } else {
      setErrorMessage('Invalid values')
    }
  }

  return (
    <div className={styles.login}>
      <Title title="Sign In" />
      <Input type="text" handleChange={setEmail} placeholder="Email" />
      <Input
        type="password"
        handleChange={setPassword}
        placeholder="Password"
      />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <Button title="Login" onClick={handleSubmit} />
      <p>
        Don't have an account? <Link to="/registration">Sign up</Link>
      </p>
    </div>
  )
}

export default Login
