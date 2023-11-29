import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../redux/hook';
import { selectMailById } from '../redux/selector';
import '../App.scss';

function Mail() {
  const routeParams = useParams();
  const id = routeParams.id;
  const mail = useAppSelector((state) => selectMailById(state, id ? parseInt(id) : -1));

  return (
    <>
      <div className='mail-detail'>
        <div className='title'>
          <h2>{mail?.subject === "" ? "(No subject)" : mail?.subject}</h2>
        </div>
        <div className='title'>
          <div className='mail-title'>
            <p>{mail?.type === "Inbox" ? "From: " + mail?.from : "To: " + mail?.to}</p>
            <p>{mail?.date.format("ddd MM/DD/YYYY HH:mm A").toString()}</p>
          </div>
          <p>{mail?.body === "" ? "" : mail?.body}</p>
        </div>
      </div>
    </>
  )
}

export default Mail