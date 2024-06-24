import React from 'react'

const Modal = ({setshowmodal}) => {
  return (
    <div className='modal'>
      <div className="box">
        <button onClick={()=>setshowmodal(false )}>X</button>
        <h1>Hello its modal</h1>
      </div>
    </div>
  )
}

export default Modal
