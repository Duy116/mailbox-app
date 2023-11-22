import React, { PropsWithChildren } from 'react'
import '../App.scss';

function Dropdown(props: PropsWithChildren<{name: String}>) {
    const [ isHidden, setIsHidden ] = React.useState(false);

    return (
        <>
            <div className='dropdown'>
                <h2 className={!isHidden ? "spin" : ""}>&gt;</h2>
                <button onClick={() => setIsHidden(!isHidden)}>
                    {props.name}
                </button>
            </div>
            <div className={ isHidden ? "none" : "dropdown-item"}>
                {props.children}
            </div>
        </>
    )
}

export default Dropdown