import React from 'react';
import { getLanguage } from '../utils/getLanguage';
import back from '../img/backWhite.png';
import { useNavigate } from 'react-router-dom';


const BackButton = () => {
    const navigate = useNavigate();
    return (
        <button className='button' onClick={() => navigate(-1)}>
            <img style={{ marginRight: "15px", width: "25px" }} src={back} alt='vector' />
            {getLanguage() == 'tm' ? "Yza" : "Назад"}
        </button>
    )
}

export default BackButton;