import { axiosInstance } from './axios';
import { getToken } from './getToken';

export const categoryReq = async () => {
    const categoryData = await axiosInstance.get('api/v2/groups', { headers: { Authorization: `Bearer ${getToken()}` } });
    const group = categoryData.data.data.groups;
    localStorage.setItem('terminal-category', JSON.stringify(group));
    setInterval(() => categoryReq(), 1000 * 60 * 10);
}

export const noterialReq = async () => {
    const noterialData = await axiosInstance.get('api/v2/document_types', { headers: { Authorization: `Bearer ${getToken()}` } });
    const noterial = noterialData.data.data.document_types;
    localStorage.setItem('terminal-noterial', JSON.stringify(noterial));
    setInterval(() => noterialReq(), 1000 * 60 * 10);
}