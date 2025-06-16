import axios from 'axios';

export const sendContactMessage = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  const res = await axios.post('http://localhost:5000/api/contact', formData);
  return res.data;
};
