import { React, useState, useContext } from 'react';
import { FontContext } from '../../../context/context';
import back from '../../../img/back.png';
import './keyboard.css';


const Keyboard = ({ writeFunction, clearFunction }) => {
    const language = localStorage.getItem('terminal');
    const { isBig } = useContext(FontContext);
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const firstLine = language == 'tm' ? ['Ä', "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Ň"]
        : ["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ"];
    const secondLine = language == 'tm' ? ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö"]
        : ["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"];
    const thirdLine = language == 'tm' ? ["Z", "Ü", "Ç", "Ý", "B", "N", "M", "Ş"]
        : ["Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю"];

    const write = (e) => {
        writeFunction(e.target.value)
    }

    const clear = () => {
        clearFunction();
    }
    return (
        <div className='keyboard'>
            <div className='letters'>
                {
                    numbers.map((item, index) =>
                        <button className={`key ${isBig ? "key-big" : ""}`} key={index} value={item} onClick={(e) => write(e)}>{item}</button>
                    )
                }
            </div>
            <div className='letters'>
                {
                    firstLine.map((item, index) =>
                        <button style={{ fontFamily: "Archivo" }} className={`key ${language == "ru" ? 'letters_russian' : 'letters_turkmen'} ${isBig ? "key-big" : ""}`} key={index} value={item} onClick={(e) => write(e)}>{item}</button>
                    )
                }
            </div>
            <div className='letters'>
                {
                    secondLine.map((item, index) =>
                        <button className={`key ${isBig ? "key-big" : ""}`} key={index} value={item} onClick={(e) => write(e)}>{item}</button>
                    )
                }
            </div>
            <div className='letters'>
                {
                    thirdLine.map((item, index) =>
                        <button className={`key ${isBig ? "key-big" : ""}`} key={index} value={item} onClick={(e) => write(e)}>{item}</button>
                    )
                }
            </div>
            <div className='letters'>
                <button className={`key ${isBig ? "key-big" : ""}`} value='-' onClick={(e) => write(e)}>-</button>
                <button className={`key ${isBig ? "key-big" : ""}`} value='.' onClick={(e) => write(e)}>.</button>
                <button className={`key space ${isBig ? "key-big" : ""}`} value=' ' onClick={(e) => write(e)}> </button>
                <button className={`key ${language == 'tm' ? 'clean_tm' : 'clean_ru'} ${isBig ? "key-big" : ""}`} onClick={clear}><img className={`clean-img ${isBig ? "clean-img-big" : ""}`} src={back} />{language == 'tm' ? 'Poz' : 'Очистить'}</button>
            </div>
        </div>
    )
}

export default Keyboard; 