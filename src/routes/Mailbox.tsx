import React from 'react'
import '../App.scss';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { selectMailsByType,  } from '../redux/selector';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { deleteMail } from '../redux/mailSlice';

function Mailbox({name} : {name: string} ) {
  const mails = useAppSelector(state => selectMailsByType(state, name));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const id = useParams().id;
  const handleClick = (id: number) => {
    navigate("/" + name.toLowerCase() + "/" + id.toString())
  }
  const hanbleDelete = (id: number) => {
    dispatch(deleteMail(id))
  }
  return (
    <>
      <div className='mailbox'>
        <div className='title'>
          <h2>{name}</h2>
        </div>
        {mails.map(mail => (
          <div style={{ display: "flex", width: "100%" }}>
            <div className={mail.id === parseInt(id ? id : "-1") ? "mail-active" : "mail"} onClick={() => handleClick(mail.id)}>
              <div style={{ margin: "10px"}}>
                <p>{name === "Inbox" ? mail.from : (mail.to ? mail.to : "[Draft]")}</p>
                <p>{mail.subject ? mail.subject : "(No subject)"}</p>
                <p>{mail.body ? mail.body : "No preview"}</p>
              </div>
              <div className='date'>
                <p>{mail.date.format("ddd MM/D").toString()}</p>
              </div>
            </div>
            <button className={mail.id === parseInt(id ? id : "-1") ? "button-delete-active" : "button-delete"} onClick={() => hanbleDelete(mail.id)}>
              <img src='/bin.png' alt='bin' width='20px' />
            </button>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  )
}

export default Mailbox