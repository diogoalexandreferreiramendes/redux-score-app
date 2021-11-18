import Button from 'react-bootstrap/Button';
import React from 'react'
import './DashboardAdmin.css';
import ButtonSetScore from '../component/ButtonSetScore';
import { useNavigate } from 'react-router';
import ButtonSetScore1 from '../component/ButtonSetScore1';


const DashboardAdmin = (props) => { 

    let navigate = useNavigate();

    const changeUser = () => {
        navigate("/user")
    }

    const changeHome = () => {
        navigate("/")
    }

    return (
        <div>
            <Button onClick={() => (changeHome())} variant="dark">Home</Button>{' '}
            <Button onClick={() => (changeUser())} variant="dark">User</Button>{' '}
            <h1 id="adminId">Dashboard Admin</h1>
            <ButtonSetScore pitch="pitch 1"/>
            <ButtonSetScore1 pitch="pitch 2"/>
        </div>
    )
}


export default (DashboardAdmin)
