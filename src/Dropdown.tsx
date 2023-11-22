import React, { PropsWithChildren } from 'react'
import './App.scss';

function Dropdown(props: PropsWithChildren<{name: String}>) {
    const [ isHidden, setIsHidden ] = React.useState(false);

    return (
        <div className='dropdown'>
            <h2 className={!isHidden ? "spin" : ""}>&gt;</h2>
            <div>
                <button onClick={() => setIsHidden(!isHidden)}>
                    {props.name}
                </button>
                <div hidden={isHidden}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Dropdown