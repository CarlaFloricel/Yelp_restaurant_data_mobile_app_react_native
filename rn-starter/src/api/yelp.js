import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _r1pXTEauh7Vtlj775lO1dJdPRHY9KaD3rQzjlSKkiXBRc4pKSYN6BUlT2tBp39UWZCZ-s44SbT7FSRW-yD3MbvFR_1hDrxRV7Joox57Li8BhBMHby3Md_z7LwGvX3Yx'
    }
})