const grabComunities = require('./comunities');
const grabReservoirs = require('./reservoirs');
const grabReservoirData = require('./reservoir');


const url = 'https://embalses.net';

grabComunities(url, grabReservoirs, grabReservoirData)
    .then((data) => {
        console.log("Mission completed successfully")
    });


