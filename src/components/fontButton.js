import { React, useContext } from 'react';
import { getLanguage } from '../utils/getLanguage';
import { FontContext } from '../context/context';

function FontButton(props) {
    const { setIsBig, isBig } = useContext(FontContext);
    return (
        <button className='button isBig_button' onClick={() => setIsBig(!isBig)} >{getLanguage() == 'tm' ? (isBig ? 'Kiçeltmek' : 'Ulaltmak') : (isBig ? 'Уменьшить' : 'Увеличить')}</button>
    );
}

export default FontButton;