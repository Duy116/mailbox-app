import React from 'react'
import '../App.scss';

function Mailbox({name} : {name: string} ) {

  return (
    <div className='mailbox'>
      <div className='title'>
        <h2>{name}</h2>
      </div>
    </div>
  )
}

export default Mailbox