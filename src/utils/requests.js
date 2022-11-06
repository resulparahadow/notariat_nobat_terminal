import { Navigate } from 'react-router-dom';
import { axiosInstance } from './axios';
import { getToken } from './getToken';

// export const categoryReq = async () => {
//     const categoryData = await axiosInstance.get('api/v2/groups', { headers: { Authorization: `Bearer ${getToken()}` } });
//     if (categoryData.status == 200) {
//         const group = categoryData.data.data.groups;
//         localStorage.setItem('terminal-category', JSON.stringify(group));
//         setTimeout(() => categoryReq(), 1000 * 60 * 10);
//     } else if (categoryData.response.data.error === 'KIOSK_DISABLED_BY_ADMINSTRATOR') {
//         <Navigate to='/notWorking' message={'KIOSK_DISABLED_BY_ADMINSTRATOR'} />
//         console.log(categoryData)
//         setTimeout(() => categoryReq(), 1000 * 30);
//     } else if (categoryData.response.data.error === 'TIME_IS_UP') {
//         <Navigate to='/notWorking' message={'TIME_IS_UP'} />
//         setTimeout(() => categoryReq(), 1000 * 30);
//     }
// }

export const noterialReq = async () => {
    const noterialData = await axiosInstance.get('api/v2/document_types', { headers: { Authorization: `Bearer ${getToken()}` } });
    const noterial = noterialData.data.data.document_types;
    localStorage.setItem('terminal-noterial', JSON.stringify(noterial));
    setInterval(() => noterialReq(), 1000 * 60 * 10);
}