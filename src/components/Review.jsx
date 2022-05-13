import React from 'react'
import {BsFlagFill} from 'react-icons/bs';
const Review = (props) => {
  return (
      <>
      <div className="review-card">
      <div className='profile'>
          <div>
              <img src = {props.image} alt = 'display-picture'></img>
          </div>
          <div className='namecon'>
              <div className='profile-name'>{props.name}</div>
              <div className='location'>
                  <div className='flag'><BsFlagFill color="white"> size={'1.2rem'}</BsFlagFill></div>
                  <div className='city'>PALO ALTO, CA</div>
              </div>
          </div>
      </div>
      <div className='review-text'><p>Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Vitae in donec in nisi vitae. 
          Vestibulum pellentesque eget laoreet adipiscing. </p></div>
    </div>
      </>
    
  )
}

export default Review