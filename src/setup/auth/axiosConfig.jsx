import axios from 'axios';

export default function axiosConfig({
   baseUrl: 'http://localhost:3000',
   headers: {
      'content-type': 'application/json',
   }
});