import React from 'react';
import '../App.scss';
import { Outlet } from 'react-router-dom'
import Navigation from '../component/Navigation';
import { useAppDispatch } from '../redux/hook';
import { mailNewMail } from '../redux/mailSlice';

function App() {
  const dispatch = useAppDispatch();
  const handleNewMail = () => {
    dispatch(mailNewMail());
  }

  return (
    <>
      <header className='header'>
        <h2>Mailbox</h2>
        <form id="search-form" role="search" className='search'>
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <button>
            <img src='/search.png' alt='search' width="15px"/>
          </button>
        </form>
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
