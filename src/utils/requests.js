import { axiosInstance } from './axios';
import { getToken } from './getToken';

export const categoryReq = async () => {
    const categoryData = await axiosInstance.get('api/v2/groups', { headers: { Authorization: `Bearer ${getToken()}` } });
    const group = categoryData.data.data.groups;
    localStorage.setItem('terminal-category', JSON.stringify(group));
    setInterval(() => categoryReq(), 1000 * 60 * 10);
}