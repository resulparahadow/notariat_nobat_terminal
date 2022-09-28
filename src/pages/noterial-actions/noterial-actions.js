import { React, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiFontSize } from "react-icons/bi";
import { FontContext } from '../../context/context';
import BackButton from '../../components/backButton';
import { getLanguage } from '../../utils/getLanguage';
import { axiosInstance } from '../../utils/axios';
import { getToken } from '../../utils/getToken';
import './noterial-actions.css'

const TerminalSubcategories = () => {
    const navigate = useNavigate();
    const [subCategory, setSubCategory] = useState(null);
    const { setIsBig, isBig } = useContext(FontContext);

    useEffect(() => {
        axiosInstance.get('api/v2/document_types', { headers: { Authorization: `Bearer ${getToken()}` } }).then((res) => {
            console.log(res.data.data.document_types);
            setSubCategory(res.data.data.document_types);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const handleClick = (item) => {
        localStorage.setItem('terminal-id', item.id);
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
            <div className='category-buttons-container'>
                <BackButton />
                <BiFontSize style={{ fontSize: "4.3rem", color: "red", marginBottom: "5px" }} onClick={() => setIsBig(!isBig)} />
            </div>
        </div>
    )
}

export default TerminalSubcategories;