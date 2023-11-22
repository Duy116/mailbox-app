import React, { PropsWithChildren } from 'react'
import './Dropdown.scss';

function Dropdown(props: PropsWithChildren<{name: String}>) {
    const [ isHidden, setIsHidden ] = React.useState(false);

    return (
        <div className='dropdown'>
            <h2 className={!isHidden ? "spin" : ""}>&gt;</h2>
            <button onClick={() => setIsHidden(!isHidden)}>{props.name}
            <div hidden={isHidden}>
                {props.children}
            </div>
            </button>
        </div>
    )
}

export default Dropdown