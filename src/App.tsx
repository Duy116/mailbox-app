import React from 'react';
import './App.scss';
import Dropdown from './Dropdown';
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <header className='header'>
        <h2>Mailbox</h2>
      </header>
      <div className='main'>
        <div className='navigation'>
          <Dropdown name="Favorites">
            <h3>Sent</h3>
          </Dropdown>
          <Dropdown name="Folders">
            <h3>Inbox</h3>
            <h3>Draft</h3>
            <h3>Sent</h3>
            <h3>Delete</h3>
          </Dropdown>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
