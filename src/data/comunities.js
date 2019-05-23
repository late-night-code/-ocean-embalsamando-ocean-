const rp = require('request-promise');
const $ = require('cheerio');

// Grab comunities
const grabComunities = function(url) {
    return rp(url)
        .then(function(html){
            //success!
            // console.log(html);
            const links = $('div > div > ul > li > a', html);
            console.log("Number of links: " + links.length);
            // console.log(links);
            const urlComunities = [];
            for (let i = 0; i < links.length; i++) {
                var ithLink = links[i].attribs.href;
                console.log("Link: " + ithLink)
                if ( (ithLink).indexOf("/comunidad-") != -1 ) {
                    urlComunities.push(ithLink);
                    console.log("Comunity saved")
                }
            }
            console.log(urlComunities);
            return urlComunities
        })
        .catch(function(err){
            console.log(err);
        });
};

module.exports = grabComunities;

