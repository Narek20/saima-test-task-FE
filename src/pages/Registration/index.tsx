import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Title } from '../../components/shared/Title'
import { Input } from '../../components/shared/Input'
import { Button } from '../../components/shared/Button'
import { register } from '../../services/user.service'

import styles from './styles.module.scss'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (email && password && password === repeatPassword) {
      const data = await register(email, password)

      if (!data.success) {
        setErrorMessage(data.message)
        return;
      }

      navigate('/login')
    } else {
      setErrorMessage('Invalid values')
    }
  }

  return (
    <div className={styles.registration}>
      <Title title="Sign Up" />
      <Input type="text" handleChange={setEmail} placeholder="Email" />
      <Input
        type="password"
        handleChange={setPassword}
        placeholder="Password"
      />
      <Input
        type="password"
        handleChange={setRepeatPassword}
        placeholder="Repeat Password"
      />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <Button title="Registration" onClick={handleSubmit} />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  )
}

export default Registration
