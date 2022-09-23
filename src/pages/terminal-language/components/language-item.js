import React from 'react';
import { useNavigate } from 'react-router-dom';
import './language-item.css';

const LanguageItem = (props) => {
    const navigate = useNavigate();
    const saveLanguage = () => {
        localStorage.setItem('terminal', props.short);
        navigate('/category');
    }
    return (
        <div className='language' onClick={saveLanguage}>
            <img className='language-flag' src={props.img} alt='image' />
            <p className='language-text' >{props.language}</p>
        </div>
    )
}

export default LanguageItem;