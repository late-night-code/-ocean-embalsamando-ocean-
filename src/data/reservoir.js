const rp = require('request-promise');
const $ = require('cheerio');

// Grab reservoir data
const grabReservoirData = function(url) {
    rp(url)
        .then(function(html){
            //success!
            // const links = $(' td >  a', html)
            // console.log("Number of links: " + links.length);
            // const divs = $(' td >  div', html)
            // console.log("Number of divs: " + divs.length);
            // const urlReservoirs = [];
            // for (let i = 0; i < divs.length; i++) {
            //     var ithLink = links[i].attribs.href;
            //     var ithClass = divs[i].attribs.class;
            //     // console.log("Link: " + ithLink);
            //     // console.log("Class: " + ithClass);
            //     if ( ithClass === "TiempoReal" ) {
            //         urlReservoirs.push(ithLink);
            //         console.log("Reservoir " + i + " saved: " + ithLink);
            //     }
            // }
            // return urlReservoirs;
        })
        .catch(function(err){
            //handle error
        });
}

module.exports = grabReservoirData;
