
import {connect} from 'react-redux'

function Cart(props) {

const removeItem = (title) => {
    props.removeItem(title)
} 

const books = props.cart
const cartItems = books.map((book, index) => {
    return <div className="cartItem" key={index}>
        {book.title} - 
        <button onClick={() => {removeItem(book.title)}}>Remove Item</button>-
        
    </div>
})

    return (
        <div className='oneBook'>
            <div>My Cart</div>
            <br />
            {cartItems}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (item) => dispatch({type: 'REMOVE_ITEM', payload: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)