import { React, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontContext } from '../../context/context';
import BackButton from '../../components/backButton';
import { BiFontSize } from 'react-icons/bi';
import Keyboard from './components/keyboard';
import { getLanguage } from '../../utils/getLanguage';
import back from '../../img/backWhite.png';
import './name-input.css'

const NameInput = () => {
    const { setIsBig, isBig } = useContext(FontContext);
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
                <div className={`input-container ${isBig ? "input-container-big" : ""}`}>
                    <input className={`name-input ${isBig ? "name-input-big" : ""}`} value={text} type='text' placeholder='Ady, familiýasy' />
                </div>
                <Keyboard writeFunction={write} clearFunction={clear} />
            </div>
            <div className='button-container'>
                <BackButton className='back-button' />
                <BiFontSize style={{ fontSize: "4.3rem", color: "red", marginBottom: "5px" }} onClick={() => setIsBig(!isBig)} />
                <button className='button' onClick={nextHandle}>
                    {getLanguage() == 'tm' ? "Indiki" : "Следующий"}
                    <img style={{ marginLeft: "12px", width: "25px", transform: "rotate(180deg)" }} src={back} alt='vector' />
                </button>
            </div>
        </div>
    )
}

export default NameInput;