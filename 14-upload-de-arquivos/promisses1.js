const CarroDB = require("./model/CarroDB");

function teste() {
    CarroDB.getCarros((error, carros) => {
        console.log(JSON.stringify(carros));
    });
};
teste();
