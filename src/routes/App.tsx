import React from 'react';
import '../App.scss';
import Dropdown from '../Dropdown';
import { Outlet, NavLink } from 'react-router-dom'

function App() {

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
        </form>
      </header>
      <div className='main'>
        <div className='navigation'>
          <Dropdown name="Favorites">
            <NavLink to="/sent">Sent</NavLink>
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
