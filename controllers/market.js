const { getData } = require('../services/market');

const postData = async (req, res) => {
    try {
        let status = await getData();

        return res.render('main', { data: status.data });

    } catch(err) {
        console.log(err);
        return res.render('main')      
    };
};

module.exports = {
    postData
};