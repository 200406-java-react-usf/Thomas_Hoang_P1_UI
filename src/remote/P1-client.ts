import axios from 'axios';

export const P1Client = axios.create({
    baseURL: 'http://ThomasHoangP1-env-1.eba-hktpj2wz.us-east-2.elasticbeanstalk.com',
    headers: {
        'Content-Type': 'application/json'
    }
});