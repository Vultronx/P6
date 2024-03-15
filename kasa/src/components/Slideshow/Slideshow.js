import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../../styles/App.scss';

function Slideshow( picture ) {
    return (
        <img className="bannerHigh" src={picture.url} alt="picture" />
    )
}

export default Slideshow;