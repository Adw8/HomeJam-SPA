import React from 'react'
import {IoIosArrowRoundForward} from 'react-icons/io';
import '../App.css';
import {HiOutlineTicket} from 'react-icons/hi';
const Card = (props) => {
  return (
    <>
    <div className='main-card'>
      <div className="innerImg">
          <img src={props.image}></img>
      </div>
      <div className="innerDetails">
      <div className='tag'>{props.tag}</div>
      <div className='name'>{props.name}</div>
      <div className='link'>
        <div className='link-section1'>
          <div className='more-info'>More-Info</div>
          <div className='arrow-icon'><IoIosArrowRoundForward size={"1.5rem"} color="#0259EB"></IoIosArrowRoundForward></div>
        </div>
        <div className='ticket-logo'><HiOutlineTicket color='purple' size={"1.8rem"}></HiOutlineTicket></div>
      </div>
      </div>
      </div> 
    </>
  )
}

export default Card