const { fetchData } = require('../utils/data');

const getData = async () => {
    let data = []

    await fetchData().then( (res) => {
        for( product of res.data.Products ){
            data.push({
                image: product.media.imageUrl,
                title: product.title,
                price: product.retailPrice,
                sales: product.market.salesLast72Hours,
                premium: product.market.pricePremium,
                onmarket: product.market.numberOfAsks,
                lowestask: product.market.lowestAsk,
                lowestsize: product.market.lowestAskSize,
                highestbid: product.market.highestBid,
                highestsize: product.market.highestBidSize
            });        
        };
    });
     
    return { status: 'Success', data: data }; 
};

module.exports = {
    getData
};