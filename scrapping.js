const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://sandbox5.dobcn.com/hiring/francisco/catalog').then(res => {

    const products = {};

    // console.log(res.data);

    //object
    const $ = cheerio.load(res.data);

    //each products
    $('.catalog-product').each( (index, element) => {
        const imgProduct = $(element).children().first().children('img').attr('src');
        const description = $(element).children().last().html();
        const buttonSeeProduct = $(element).children().last().children('div').children('a').attr('href');
        products[index] = {imgProduct, description, buttonSeeProduct};
     });
     console.log(products);
})