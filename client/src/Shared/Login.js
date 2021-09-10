import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from './FormContainer'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {login} from '../redux/actions/userAction'
import {useHistory} from 'react-router-dom'

const Login = () => {   
    const dispatch = useDispatch()
    const loginUser = useSelector(state => state.userLogin)
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const {loading, error, userInfo } = loginUser
  
useEffect(()=>{ 
    if(userInfo){
        history.push('/')
    }
})

    const loginUserHandler = ( ) => {
        dispatch(login(email,password))
    }
    return (
        <FormContainer>
            Sign In
            <Form.Group>
                <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                >   
                </Form.Control>

                <Form.Control
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                >
                </Form.Control>

                <Button type='submit' variant='primary' onClick={loginUserHandler}>Sign in</Button>

                <Row>
                    <Col>
                        New Customer ? {' '}
                        <Link to='/register'>Register</Link>
                    </Col>
                </Row>
            </Form.Group>

        </FormContainer>
    )
}

export default Login
