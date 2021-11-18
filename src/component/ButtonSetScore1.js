import React from 'react'
import './ButtonSetScore.css'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { add20, remove20, reset20, add21, remove21 } from '../redux/actionsScore';

const ButtonSetScore1 = (props) => {

    return (
        <div>
            <div className="buttonsSet">
                    <h3 id="pitchId">{props.pitch}</h3>
                    <Button onClick={() => props.add20()} variant="dark">+</Button>{' '}
                    <Button onClick={() => props.remove20()} variant="dark">-</Button>{' '}
                    <Button onClick={() => props.reset20()} variant="dark">Reset</Button>{' '}
                    <Button onClick={() => props.add21()} variant="dark">+</Button>{' '}
                    <Button onClick={() => props.remove21()} variant="dark">-</Button>{' '}
                    <h3> {props.count2} : {props.count20}</h3>
            </div>
        </div>
    )
}

const stateToProps = (state) => {
    return{
      count2: state.count2,
      count20: state.count20
    }
  }

const mapDispatchProps = (dispatch) => {
    return{
        add20: () => dispatch(add20()),
        remove20: () => dispatch(remove20()),
        reset20: () => dispatch(reset20()),
        add21: () => dispatch(add21()),
        remove21: () => dispatch(remove21())
    }
}

export default connect(stateToProps, mapDispatchProps)(ButtonSetScore1)
