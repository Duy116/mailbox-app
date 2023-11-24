import React from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

function Navigation() {
    const [ index, setIndex ] = React.useState("0");
    const handleClick = (e: React.MouseEvent) => {
        setIndex(e.currentTarget.id);
    }
  return (
    <div className='navigation'>
          <Dropdown name="Favorites">
            <Link id="1" to="inbox" onClick={(e) => handleClick(e)}
                className={index === "1" ? "link-active" : "link"}>Inbox</Link>
            <Link id="2" to="sent" onClick={(e) => handleClick(e)}
                className={index === "2" ? "link-active" : "link"}>Sent</Link>
          </Dropdown>
          <Dropdown name="Folders">
            <Link id="3" to="inbox" onClick={(e) => handleClick(e)}
                className={index === "3" ? "link-active" : "link"}>Inbox</Link>
            <Link id="4" to="sent" onClick={(e) => handleClick(e)}
                className={index === "4" ? "link-active" : "link"}>Sent</Link>
            <Link id="5" to="sent" onClick={(e) => handleClick(e)}
                className={index === "5" ? "link-active" : "link"}>Draft</Link>
            <Link id="6" to="sent" onClick={(e) => handleClick(e)}
                className={index === "6" ? "link-active" : "link"}>Delete</Link>
          </Dropdown>
    </div>
  )
}

export default Navigation
