const axios = require('axios');

const fetchData = async () => {
    let url = 'https://stockx.com/api/browse?productCategory=sneakers&sort=most-active&order=DESC&country=US';
    let options = {
        headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
        }
    };

    let data = await axios.get(url, options);

    return data;
};

module.exports = {
    fetchData
};