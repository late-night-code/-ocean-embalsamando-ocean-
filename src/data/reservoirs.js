const rp = require('request-promise');
const $ = require('cheerio');

// Grab reservoirs
const grabReservoirs = function(url, grabReservoirData) {
    rp(url)
        .then(function(html){
            //success!
            console.log("----------Reservoirs----------");
            const links = $(' td >  a', html)
            console.log("Number of links: " + links.length);
            const divs = $(' td >  div', html)
            console.log("Number of divs: " + divs.length);
            const urlsReservoirs = [];
            for (let i = 0; i < divs.length; i++) {
                var ithLink = links[i].attribs.href;
                var ithClass = divs[i].attribs.class;
                // console.log("Link: " + ithLink);
                // console.log("Class: " + ithClass);
                if ( ithClass === "TiempoReal" ) {
                    urlsReservoirs.push(ithLink);
                    // console.log("Reservoir " + i + " saved: " + ithLink);
                }
            }
            console.log(urlsReservoirs)
            return Promise.all(
                urlsReservoirs.map(function(url) {
                  return grabReservoirData(url);
                })
            );
        })
        .catch(function(err){
            //handle error
        });
}

module.exports = grabReservoirs;
