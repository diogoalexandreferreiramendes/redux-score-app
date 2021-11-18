import Button from 'react-bootstrap/Button';
import React from 'react'
import { useNavigate } from "react-router-dom"


const Home = () => {
    let navigate = useNavigate();

    const changeAdmin = () => {
        navigate("/admin")
    }

    const changeUser = () => {
        navigate("/user")
    }

    return (
        <div>
            <h1>HOME</h1>
            <div>
                <Button onClick={() => changeAdmin()} variant="dark">Admin</Button>{' '}
                <Button onClick={() => changeUser()} variant="dark">User</Button>{' '}
            </div>
        </div>
    )
}

export default Home
