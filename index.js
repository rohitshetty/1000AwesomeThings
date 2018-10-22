const rp = require('request-promise');
const cheerio = require('cheerio');


module.exports.getAwesomeOfTheDay = () => {

    const options = {
        uri: 'http://1000awesomethings.com/',
        transform: function (body) {
            return cheerio.load(body);
        }
    };

    return rp(options)
        .then($ => {
            // Find all the article element
            // Then find the id, and sort it
            // take the most recent post id
            // fetch its url and return the url.
            
            const postIds = $('article').map(function (i, elem) {
                const id = $(this).attr('id');
                return +id.split('post-')[1];
            }).get()
            .sort((a,b) => +b - +a)
    
            const recentPostId = postIds[0];
    
            return $(`#post-${recentPostId}`).children('.blog-item-wrap').children('a').attr('href');
        });
}

