import { React, useState, useContext } from 'react';
import { FontContext } from '../../../context/context';
import back from '../../../img/back.png';
import './keyboard.css';

const Keyboard = ({ writeFunction, clearFunction }) => {
    const { setIsBig, isBig } = useContext(FontContext);
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const firstLine = ['Ä', "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Ň"];
    const secondLine = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö"];
    const thirdLine = ["Z", "Ü", "Ç", "Ý", "B", "N", "M", "Ş"];

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
                        <button className={`key ${isBig ? "key-big" : ""}`} key={index} value={item} onClick={(e) => write(e)}>{item}</button>
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
                <button className={`key clean ${isBig ? "key-big" : ""}`} onClick={clear}><img className={`clean-img ${isBig ? "clean-img-big" : ""}`} src={back} />Poz</button>
            </div>
        </div>
    )
}

export default Keyboard; 