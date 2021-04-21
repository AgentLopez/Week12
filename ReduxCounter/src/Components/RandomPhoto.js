import { useState, useEffect } from 'react'
import { connect } from "react-redux"


function RandomPhoto (props) {

    const [image, setImage] = useState('')


const getNewImage = () => {
    const randomURL = `https://picsum.photos/200/300?random=${new Date().getTime()}`
    setImage(randomURL)
    props.newImage(randomURL)
}

const images = props.img
const imgs = images.map((image) => {
    return <img src = {image} />
})


    return (
        <div className = "Getit">

            <h1>Random Picture</h1> <br />
            {imgs}
            <button onClick={getNewImage}>See New Image</button>
            
            <br />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        newImage: (link) => dispatch({type: 'NEW_IMG', payload: link})
    }
}

const mapStateToProps = (state) => {
    return {
        img: state.pic.url
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomPhoto)