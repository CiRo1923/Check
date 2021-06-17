import axios from 'axios';

const apiRequest = axios.create({
  baseURL: '/mbr-api/',
  headers: {
    'X-Ap-Token': 'E4572FE8-4365-4EB6-91EE-0C12F1460BF1'
  }
});

// 註冊
export const apiRegister = data => apiRequest.post('member/register', data);
