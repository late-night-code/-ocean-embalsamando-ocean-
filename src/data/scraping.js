const grabComunities = require('./comunities');
const grabReservoirs = require('./reservoirs');

const url = 'https://embalses.net';

grabComunities(url)
    .then((urlComunities) => {
        for (let i = 0; i < urlComunities.length; i++) {
            console.log("Grab: " + urlComunities[i]);
            grabReservoirs(urlComunities[i])
                .then((urlReservoirs) => {
                    console.log("Reservoirs completed")
                });
        };
    });


