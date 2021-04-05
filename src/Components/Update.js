
import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth} from '../Context/AuthContext'



export default function Update() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

   async function handleSubmit(e) {
        e.preventDefault()

        // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        //     return setError('Passwords do no match')
        // }
        // try{
        //     setError('')
        //     setLoading(true)
        // await  login(emailRef.current.value, passwordRef.current.value)
        // } catch {
        //     setError('Failed to sign in')
        // }
        // setLoading(false)
    }
  
    return (
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Update Profile</h2> 
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required/>
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required/>
                </Form.Group>
                <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required/>
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
            </Form>
            </Card.Body>
        
        </Card>
        <div className="w-100 text-center mt-2">
        Already have an account? 
        </div>
        </> 
    )
}