import React from 'react'
import './DashboardUser.css';
import { connect } from 'react-redux';


const DashboardUser = (props) => {
    return (
        <div>
            <h1 id="dashTitle">Dashboard User</h1>
            <div className="displayResult">
                <div>
                    <h3>Pitch 1 : Result: {props.count} - {props.count1}</h3>
                </div>
                <div>
                    <h3>Pitch 2 : Result: 0 - 0</h3>
                </div>
                <div>
                    <h3>Pitch 3 : Result: 0 - 0</h3>
                </div>
                <div>
                    <h3>Pitch 4 : Result: 0 - 0</h3>
                </div>
                <div>
                    <h3>Pitch 5 : Result: 0 - 0</h3>
                </div>
            </div>
        </div>
    )
}

const stateToProps = (state) => {
    return{
        count: state.count,
        count1: state.count1
    }
}

export default connect(stateToProps)(DashboardUser)
