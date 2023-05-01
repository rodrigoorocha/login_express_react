import { useState } from 'react'
import './App.css'
import { Alert, Button, Container, Input } from '@mantine/core'

function App() {

  const [email, setEmail] = useState("rodrigo")
  const [password, setPassword] = useState("123456")
  const [success, setSuccess] = useState("")
  const [isOpen, setIsOpen] = useState(false)


  const handleClick = async () => {
    const response = await fetch("http://localhost:5000/", {
      method: "POST",
      body: JSON.stringify(
        {
          email,
          password
        }
      ),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    response.json().then(res => {
      setSuccess(res.success)
    })
    
    setIsOpen(true)
  }


  const LoginAlert = (
    <Alert color={success ?'green' : "red" } title={success ?'sucesso' : "erro" }>
   { success ? "usuario encontrado" : "usuario nao encontrado"}
  </Alert>
  )
  return (
    <Container>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Your email"
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Your password"
      />

      <Button onClick={handleClick}>
        Sign In
      </Button>

      {isOpen ? LoginAlert : null}

    </Container>
  )
}

export default App
