const axios = require('axios')
const cheerio = require('cheerio')

const fetchData = async() => {
    try {
        const response = await axios.get('https://www.amazon.com.mx/s?k=guitarras&__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2IGEXBRZ52J2N&sprefix=guitarras%2Caps%2C164&ref=nb_sb_noss_1')
        const html = response.data
        const $ = cherrio.load(html)
        const titles = []

        $('div.a-section.a-spacing-micro.puis-padding-left-small').each((index, element) => {
           const data =  $(element)
           const title = data.find('span.a-size-base-plus.a-color-base.a-text-normal').text()
           titles.push(title)
        })
        return titles
    }catch (err) {
        console.error(err)
    }
}
fetchData().then(titles => console.log(titles))