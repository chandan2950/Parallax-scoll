import React from 'react'
import {Parallax} from 'react-parallax'
import Image1 from '../images/Imageone.jpg'

const ImageOne = (props) => {
  return (
    <Parallax className='bgimg'bgImage={Image1} bgImageAlt="Space" strength={200}>
        <div className='content'>
            <span className='span'>Trip to {props.name}</span>
        </div>
    </Parallax>
  )
}

export default ImageOne