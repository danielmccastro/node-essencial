const CarroDB = require("./model/CarroDB");
function teste() {
    let promisse = CarroDB.getCarros();
    promisse.then(carros => console.log(JSON.stringify(carros)));
};

teste();