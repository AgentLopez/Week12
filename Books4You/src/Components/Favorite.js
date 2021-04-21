
import {connect} from 'react-redux'

function Cart(props) {

const removeFav = (title) => {
    props.removeFav(title)
} 

const books = props.cart
const cartItems = books.map((book, index) => {
    return <div className="cartItem" key={index}>
        {book.title} - 
        <button onClick={() => {removeFav(book.title)}}>Remove Fav</button> -
        
    </div>
})

    return (
        <div className='oneBook'>
            <div>My Favorite(s)</div>
            <br />
            {cartItems}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.fav
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFav: (item) => dispatch({type: 'REMOVE_FAV', payload: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)