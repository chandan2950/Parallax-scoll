import React from 'react'
import {Parallax} from 'react-parallax'
import Image3 from '../images/Imagethree.jpg'

const ImageThree = (props) => {
  return (
    <Parallax className='bgimg'bgImage={Image3} bgImageAlt="Space" strength={200}>
        <div className='content'>
            <span className='span'>Trip to {props.name}</span>
        </div>
    </Parallax>
  )
}

export default ImageThree