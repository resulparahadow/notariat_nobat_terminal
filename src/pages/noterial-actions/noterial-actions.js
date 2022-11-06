import { React, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontContext } from '../../context/context';
import BackButton from '../../components/backButton';
import { getLanguage } from '../../utils/getLanguage';
import './noterial-actions.css'
import FontButton from '../../components/fontButton';

const TerminalSubcategories = () => {
    const navigate = useNavigate();
    const [subCategory, setSubCategory] = useState(null);
    const { setIsBig, isBig } = useContext(FontContext);

    useEffect(() => {
        const noterial = JSON.parse(localStorage.getItem('terminal-noterial'));
        if (noterial.success) {
            setSubCategory(noterial.noterials);
        } else {
            if (noterial.err === 1) {
                window.location.href = '/disabled';
            } else if (noterial.err === 2) {
                window.location.href = '/timeUp';
            } else {
                window.location.href = '/notWorking';
            }
        }
    }, []);

    const handleClick = (item) => {
        localStorage.setItem('terminal-id', item.group_id);
        navigate('/name');
    }

    return (
        <div className='subcategory-div'>
            <div className='subcategory-container'>
                {subCategory?.map((item, index) =>
                    <div className='subcategory-item' key={index} onClick={() => handleClick(item)}>
                        <p className={`subcategory-content ${isBig ? "content-big" : ""}`}>{getLanguage() == 'tm' ? item.doc_types_name_tm : item.doc_types_name_ru}</p>
                    </div>
                )}
            </div>
            <div className='subcategory-buttons-container'>
                <BackButton />
                <FontButton />
            </div>
        </div>
    )
}

export default TerminalSubcategories;