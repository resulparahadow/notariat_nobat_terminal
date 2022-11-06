import React from 'react';
import { useNavigate } from 'react-router-dom';
import './not-working.css';

const KioskDisabled = () => {
    const navigate = useNavigate();
    const language = localStorage.getItem("terminal");

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: "center" }}>
            <div className='not-working-container'>
                <h1 className='content'>{language == 'tm' ? "Terminal administrasiýa tarapyndan öçürilen!" : "Терминал отключен администратором!"}</h1>
            </div>
            <button className='button' onClick={() => navigate('/language')} > {language == 'tm' ? "Yza" : "Назад"}</button>
        </div>
    )
}

export default KioskDisabled;