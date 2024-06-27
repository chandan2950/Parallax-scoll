import React from 'react'
import {Parallax} from 'react-parallax'
import Image2 from '../images/imagetwo.jpg'

const ImageTwo = (props) => {
  return (
    <Parallax className='bgimg'bgImage={Image2} bgImageAlt="Space" strength={200}>
        <div className='content'>
            <span className='span'>Trip to {props.name}</span>
        </div>
    </Parallax>
  )
}

export default ImageTwo