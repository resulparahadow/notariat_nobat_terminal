import React from 'react';
import turkmen from '../../img/turkmen.png';
import russian from '../../img/russian.png';
import './terminal-language.css';
import LanguageItem from './components/language-item';

const TerminalLanguage = () => {
    return(
        <div className='terminal-language-container'>
            <h2>Dil saýlaň</h2>
            <div>
                <LanguageItem img={turkmen} short='tm' language='Turkmen dili' />
                <LanguageItem img={russian} short='ru' language='Русский язык' />
            </div>
        </div>
    )
}

export default TerminalLanguage;