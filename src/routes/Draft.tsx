import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../redux/hook';
import { selectMailById } from '../redux/selector';
import '../App.scss';
import { useDispatch } from 'react-redux';
import { sentMail } from '../redux/mailSlice';

function Draft() {
  const routeParams = useParams();
  const id = routeParams.id;
  const mail = useAppSelector((state) => selectMailById(state, id ? parseInt(id) : -1));
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [ currentMail, setCurrentMail] = React.useState(mail);
  const handleSent = () => {
    if (!currentMail || !mail) 
      return;

    if (currentMail?.to === "") {
      alert("Please insert email to sent to");
      return;
    }

    setCurrentMail({...currentMail, id: mail.id});
    dispatch(sentMail(currentMail));
    nav("/draft");
  }

  if (currentMail) {
    return (
      <>
        <form className='draft'>
          <div>
            <button onClick={handleSent} className='button-sent'>Sent</button>
          </div>
          <div>
            <label>To:</label>
            <input type='email' style={{ width: "94%"}} value={currentMail.to} onChange={(e) => setCurrentMail({ ...currentMail, to: e.target.value})}/>
          </div>
          <input placeholder='Add subject' value={currentMail.subject} onChange={(e) => setCurrentMail({...currentMail, subject: e.target.value})}/>
          <textarea value={currentMail.body} onChange={(e) => setCurrentMail({...currentMail, body: e.target.value})}/>
        </form>
      </>
    )
  }
  else {
    return (
      <>
        <div>Loading...</div>
      </>
    )
  }
}

export default Draft