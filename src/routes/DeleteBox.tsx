import React from 'react'
import '../App.scss'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { selectDeletedMail } from '../redux/selector'
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { restoreMail } from '../redux/mailSlice';


function DeleteBox() {
    const mails = useAppSelector(selectDeletedMail);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const id = useParams().id;
    const handleClick = (id: number) => {
      navigate("/deleted/" + id.toString())
    }
    const handleRestore = (id: number) => {
        dispatch(restoreMail(id))
    }
    
  return (
    <>
      <div className='mailbox'>
        <div className='title'>
          <h2>Deleted</h2>
        </div>
        {mails.map(mail => (
            <div style={{ display: "flex", width: "100%" }}>
                <div className='mail' onClick={() => handleClick(mail.id)}>
                    <div style={{ margin: "10px"}}>
                        <p>{mail.type === "Inbox" ? mail.from : (mail.to ? mail.to : "[Draft]")}</p>
                        <p>{mail.subject ? mail.subject : "(No subject)"}</p>
                        <p>{mail.body ? mail.body : "No preview"}</p>
                    </div>
                    <div className='date'>
                        <p>{mail.date.format("ddd MM/D").toString()}</p>
                    </div>
                </div>
                <button className={mail.id === parseInt(id ? id : "-1") ? "button-restore-active" : "button-restore"} onClick={() => handleRestore(mail.id)}>
                    <img src='/restore.png' alt='bin' width='20px' />
                </button>
            </div>
        ))}
      </div>
      <Outlet />
    </>
  )
}

export default DeleteBox