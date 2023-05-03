import { useContext, useState } from 'react'
import { Alert, Button, Container, Input } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

function LoginPage() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("rodrigo@gmail.com")
    const [password, setPassword] = useState("123456")
    const [error, setError] = useState(false)

    const {user, setUser} = useContext(UserContext)

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
            if (!res.error) {
                setUser(res.user)
                navigate("/home")
            } else {
                setError(res.error)

            }
        })

    }


    const LoginAlert = (
        <Alert color={"red"} title={"erro"}>
            <p>usuario nao encontrado</p>
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

            {error ? LoginAlert : null}

        </Container>
    )
}

export default LoginPage
