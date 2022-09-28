import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/backButton';
import Keyboard from './components/keyboard';
import { getLanguage } from '../../utils/getLanguage';
import back from '../../img/backWhite.png';
import './name-input.css'

const NameInput = () => {
    const [text, setText] = useState("");
    const navigate = useNavigate();

    const write = (letter) => {
        if (text.length === 0) {
            return setText(letter);
        }
        if (text[text.length - 1] == " ") {
            setText(text + letter);
        } else {
            setText(text + letter.toLowerCase())
        }
    }

    const clear = () => {
        if (text.length > 0) {
            setText(text.slice(0, -1));
        }
    }

    const nextHandle = () => {
        if (text.length > 0) {
            localStorage.setItem("terminal-fullname", text);
            navigate('/number');
        }
    }

    return (
        <div className='myDiv'>
            <div className='input-name-container'>
                <div className='input-container'>
                    <input className='name-input' value={text} type='text' placeholder='Ady, familiýasy' />
                </div>
                <Keyboard writeFunction={write} clearFunction={clear} />
            </div>
            <div className='button-container'>
                <BackButton className='back-button' />
                <button className='button' onClick={nextHandle}>
                    {getLanguage() == 'tm' ? "Indiki" : "Следующий"}
                    <img style={{ marginLeft: "12px", width: "25px", transform: "rotate(180deg)" }} src={back} alt='vector' />
                </button>
            </div>
        </div>
    )
}

export default NameInput;