import React from 'react'
import './ButtonSetScore.css'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { add, remove, reset, add1, remove1 } from '../redux/actionsScore';

const ButtonSetScore3 = (props) => {

    return (
        <div>
            <div className="buttonsSet">
                    <h3 id="pitchId">{props.pitch}</h3>
                    <Button onClick={() => props.add()} variant="dark">+</Button>{' '}
                    <Button onClick={() => props.remove()} variant="dark">-</Button>{' '}
                    <Button onClick={() => props.reset()} variant="dark">Reset</Button>{' '}
                    <Button onClick={() => props.add1()} variant="dark">+</Button>{' '}
                    <Button onClick={() => props.remove1()} variant="dark">-</Button>{' '}
                    <h3> {props.count} : {props.count1}</h3>
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

const mapDispatchProps = (dispatch) => {
    return{
        add: () => dispatch(add()),
        remove: () => dispatch(remove()),
        reset: () => dispatch(reset()),
        add1: () => dispatch(add1()),
        remove1: () => dispatch(remove1())
    }
}

export default connect(stateToProps, mapDispatchProps)(ButtonSetScore3)
