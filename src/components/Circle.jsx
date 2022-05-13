import React from 'react'
const Circle = (props) => {
  return (
    <>
    <div className='circle'>
        <div className='circle-logo'>< props.icon/></div>
        <div className='name'>{props.value}</div>
        <div font = 'Nunito' color='white' >{props.label}</div>
    </div>
    </>
  )
}

export default Circle