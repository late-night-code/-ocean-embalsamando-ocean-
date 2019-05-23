const rp = require('request-promise');
const $ = require('cheerio');

// Grab comunities
const grabComunities = function(url, grabReservoirs, grabReservoirData) {
    return rp(url)
        .then(function(html){
            //success!
            console.log("----------Comunities----------");
            const links = $('div > div > ul > li > a', html);
            console.log("Number of links: " + links.length);
            const urlsComunities = [];
            for (let i = 0; i < links.length; i++) {
                var ithLink = links[i].attribs.href;
                // console.log("Link: " + ithLink)
                if ( (ithLink).indexOf("/comunidad-") != -1 ) {
                    urlsComunities.push(ithLink);
                }
            }
            console.log(urlsComunities);
            // return urlsComunities
            return Promise.all(
                urlsComunities.map(function(url) {
                  return grabReservoirs(url, grabReservoirData);
                })
            );
        })
        .catch(function(err){
            console.log(err);
        });
};

module.exports = grabComunities;

