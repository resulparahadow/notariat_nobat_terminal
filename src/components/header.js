import React from 'react';
import adalat from '../img/adalat.png';
import flag from '../img/flag.png';
import emblem from '../img/emblem.png';
import './header.css';

const Header = () => {
    return (
        <div className="header-container">
            <img className="header-left-img" src={adalat} alt="image" />
            <div className='header-text-container'>
                <p className='header-text'>Türkmenistanyň Adalat ministrligi</p>
                <p className='header-text'>Aşgabat şäher döwlet notarial edarasy</p>
            </div>
            <div className='flag-emblem-container'>
                <img className='header-flag-img' src={flag} alt='image' />
                <img className='header-emblem-img' src={emblem} alt='image' />
            </div>
        </div>
    )
}

export default Header;