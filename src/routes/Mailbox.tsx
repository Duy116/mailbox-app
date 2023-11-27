import React from 'react'
import '../App.scss';
import { useAppSelector } from '../redux/hook';
import { selectMailsByType,  } from '../redux/selector';

function Mailbox({name} : {name: string} ) {
  const mails = useAppSelector(state => selectMailsByType(state, name));
  return (
    <div className='mailbox'>
      <div className='title'>
        <h2>{name}</h2>
      </div>
      {mails.map(mail => (
        <p>{mail.from}</p>
      ))}
    </div>
  )
}

export default Mailbox