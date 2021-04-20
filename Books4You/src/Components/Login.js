import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

function Login(props) {

    const [user, setUser] = useState({})

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const clicky = () => {

        fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then((response) => response.json())
            .then(result => {
                if (result.success) {
                    props.onLogin()
                    console.log('Logged In!')
                    props.history.push('/')
                }
            })
    }

    return (
        <div>
            <h2>Login</h2>
            <br />
            <input type="text" placeholder="User Name" onChange={onChange} name="userName" />
            <br />
            <input type="password" placeholder="Password" onChange={onChange} name="password" />
            <br />
            <button onClick={clicky}>Login</button>
            <br />
            New? <NavLink to="/register">Register Here</NavLink>


        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => dispatch({type: 'LOGIN'})
    }
}

export default connect(null, mapDispatchToProps)(Login)