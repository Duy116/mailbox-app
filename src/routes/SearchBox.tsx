import React from 'react'
import '../App.scss';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { selectMails  } from '../redux/selector';
import { Outlet, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { deleteMail, restoreMail } from '../redux/mailSlice';
import moment from 'moment';

type Filter = {
  in: string | null,
  from: string | null,
  to: string | null,
  subject: string | null,
  keywords: string | null,
  fromDate: string | null,
  toDate: string | null,
}

function SearchBox() { 
    const filter = useLoaderData() as Filter;
    const mails = useAppSelector(selectMails);
    const [ filterMails, setFilterMails ] = React.useState(    
      mails.filter(mail => {
        if (filter.in !== "All" && mail.type !== filter.in && !(filter.in === "Deleted" && mail.isDeleted))
          return;
        if (filter.from && filter.from !== mail.from)
          return;
        if (filter.to && filter.to !== mail.to)
          return;
        if (filter.subject && !mail.subject.includes(filter.subject))
          return;
        if (filter.keywords && !mail.body.includes(filter.keywords))
          return;
        if ((filter.fromDate || filter.toDate) && (mail.date < moment(filter.fromDate, 'YYYY-MM-DD') || mail.date > moment(filter.toDate, 'YYYY-MM-DD')))
          return;

        return mail;
    }));
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const id = useParams().id;
    const handleClick = (id: number) => {
        navigate("/search/" + id.toString())
    }
    const hanbleDelete = (id: number) => {
      dispatch(deleteMail(id))
    }
    const handleRestore = (id: number) => {
      dispatch(restoreMail(id))
    }
  return (
    <>
      <div className='mailbox'>
        <div className='title'>
          <h2>Search</h2>
        </div>
        {filterMails.map(mail => (
          <div style={{ display: "flex", width: "100%" }}>
            <div className={mail.id === parseInt(id ? id : "-1") ? "mail-active" : "mail"} onClick={() => handleClick(mail.id)}>
              <div style={{ margin: "10px"}}>
                <p>{mail.type === "Inbox" ? mail.from : (mail.to ? mail.to : "[Draft]")}</p>
                <p>{mail.subject ? mail.subject : "(No subject)"}</p>
                <p>{mail.body ? mail.body : "No preview"}</p>
              </div>
              <div className='date'>
                <p>{mail.date.format("ddd MM/D").toString()}</p>
                <p>{mail.type}</p>
                {mail.isDeleted ? <p style={{ color: "red" }}>Deleted</p> : <></>}
              </div>
            </div>
            {mail.isDeleted ? 
                <button className={mail.id === parseInt(id ? id : "-1") ? "button-restore-active" : "button-restore"} onClick={() => handleRestore(mail.id)}>
                    <img src='/restore.png' alt='bin' width='20px' />
                </button>
            :
                <button className={mail.id === parseInt(id ? id : "-1") ? "button-delete-active" : "button-delete"} onClick={() => hanbleDelete(mail.id)}>
                    <img src='/bin.png' alt='bin' width='20px' />
                </button>
            }
          </div>
        ))}
      </div>
      <Outlet />
    </>
  )
}

export default SearchBox