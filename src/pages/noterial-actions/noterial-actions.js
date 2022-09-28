import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/backButton';
import { getLanguage } from '../../utils/getLanguage';
import { axiosInstance } from '../../utils/axios';
import { getToken } from '../../utils/getToken';
import './noterial-actions.css'

const TerminalSubcategories = () => {
    const navigate = useNavigate();
    const [subCategory, setSubCategory] = useState(null);

    useEffect(() => {
        axiosInstance.get('api/v2/document_types', { headers: { Authorization: `Bearer ${getToken()}` } }).then((res) => {
            console.log(res.data.data.document_types);
            setSubCategory(res.data.data.document_types);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    const handleClick = (item) => {
        localStorage.setItem('terminal-id', item.id);
        navigate('/name');
    }

    return (
        <div className='subcategory-div'>
            <div className='subcategory-container'>
                {subCategory?.map((item, index) =>
                    <div className='subcategory-item' key={index} onClick={() => handleClick(item)}>
                        <p className='subcategory-content'>{getLanguage() == 'tm' ? item.doc_types_name_tm : item.doc_types_name_ru}</p>
                    </div>
                )}
            </div>
            <BackButton className='noterial-button' />
        </div>
    )
}

export default TerminalSubcategories;