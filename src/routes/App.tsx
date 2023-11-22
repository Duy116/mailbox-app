import React from 'react';
import '../App.scss';
import Dropdown from '../component/Dropdown';
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
            <NavLink to="/inbox" className={({isActive}) => [ isActive ? "link-active" : "link" ].join("")}>Inbox</NavLink>
            <NavLink to="/sent" className={({isActive}) => [ isActive ? "link-active" : "link" ].join("")}>Sent</NavLink>
          </Dropdown>
          <Dropdown name="Folders">

          </Dropdown>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
