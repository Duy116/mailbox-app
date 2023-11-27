import React from 'react';
import '../App.scss';
import { Outlet } from 'react-router-dom'
import Navigation from '../component/Navigation';
import { useAppDispatch } from '../redux/hook';
import { mailNewMail } from '../redux/mailSlice';

function App() {
  const dispatch = useAppDispatch();

  return (
    <>
      <header className='header'>
        <h2>Mailbox</h2>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <button>S</button>
        </form>
        <button onClick={() => dispatch(mailNewMail())}>New Mail</button>
      </header>
      <div className='main'>
        <Navigation />
        <Outlet />
      </div>
    </>
  );
}

export default App;
