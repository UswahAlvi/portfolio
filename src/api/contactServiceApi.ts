import axios from 'axios';

export const sendContactMessage = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  const res = await axios.post('https://world-wise-server-gnl3.onrender.com/api/contact', formData);
  return res.data;
};
