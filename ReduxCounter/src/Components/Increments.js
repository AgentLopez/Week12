import {connect} from 'react-redux'

function Increments (props) {

const up = () => {
    props.onIncrement()
}

const down = () => {
    props.onDec()
}

    return (
        <div className = "Getit">
            <h3>Increments Component</h3>
            <button onClick={up}>+</button> <button onClick={down}>-</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDec: () => dispatch({type: 'DECRIMENT'})
    }
}


export default connect(null, mapDispatchToProps)(Increments)