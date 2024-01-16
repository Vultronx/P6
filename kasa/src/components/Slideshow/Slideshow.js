import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../../styles/App.scss';

function Slideshow( picture ) {


    return (
        <div>
            <img className="bannerHigh" src={picture.url} alt="picture" />
        </div>
    )
}

export default Slideshow;