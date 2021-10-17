import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const headIcon = <FontAwesomeIcon icon={faCloud} />
    return (
        <div>
            <h1 className="header"> {headIcon} Akash </h1>

            <h2 className="header2">Total salary bugdet for this month:100000$</h2>
        </div>
    );
};

export default Header;