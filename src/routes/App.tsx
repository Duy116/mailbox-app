import React from 'react';
import '../App.scss';
import { Form, Outlet, useLocation } from 'react-router-dom'
import Navigation from '../component/Navigation';
import { useAppDispatch } from '../redux/hook';
import { mailNewMail } from '../redux/mailSlice';

function App() {
  const [ rerender, setRerender ] = React.useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const handleNewMail = () => {
    dispatch(mailNewMail());
  }
  const handleClear = () => {
    (document.getElementById("form") as HTMLFormElement).reset();
  }
  const handleClick = () => {
    document.getElementById("filter")?.classList.toggle("show");
  }
  const handleSearch = () => {
    document.getElementById("filter")?.classList.remove("show");
    setRerender(!rerender);
  }

  return (
    <>
      <header className='header'>
        <h2>Mailbox</h2>
        <Form id='form' method='get' action='/search'>
          <div className='search'>
            <input
              id="keywords"
              aria-label="Search contacts"
              placeholder="Search"
              name="keywords"
            />
            <div className='filter'>
              <img src='/sort.png' alt='filter' width="20px" onClick={handleClick}/>
            </div>
            <button onClick={handleSearch}>
              <img src='/search.png' alt='search' width="15px"/>
            </button>
          </div>
          <table id="filter" className='filter-dropdown'>
            <tr>
              <td><label>Search in</label></td>
              <td style={{ width: "350px" }}>
                <select name='in' id='in' style={{ width: "100%" }}>
                  <option value="All">All</option>
                  <option value="Sent">Sent</option>
                  <option value="Inbox">Inbox</option>
                  <option value="Draft">Draft</option>
                  <option value="Deleted">Deleted</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>From</label></td>
              <td><input name='from' id='from' style={{ width: "98%" }}/></td>
            </tr>
            <tr>
              <td><label>To</label></td>
              <td><input name='to' id='to' style={{ width: "98%" }}/></td>
            </tr>
            <tr>
              <td><label>Subject</label></td>
              <td><input name='subject' id='subject' style={{ width: "98%" }}/></td>
            </tr>
            <tr>
              <td><label>Date</label></td>
              <td>
                <div style={{ display: "flex", justifyContent: 'space-between'}}>
                  <input type='date' name='from-date' style={{ width: "41%" }}/>
                  <label>To</label>
                  <input type='date' name='to-date' style={{ width: "41%" }}/>
                </div>
              </td>
            </tr>
            <button className='button-sent' onClick={handleClear}>Clear filters</button>
          </table>
        </Form>
        <button className='button-new' onClick={() => handleNewMail()}>
          <img src='/mail.png' alt='mail' width="20px"/>
          New mail
        </button>
      </header>
      <div className='main'>
        <Navigation />
        <Outlet />
      </div>
    </>
  );
}

export default App;
