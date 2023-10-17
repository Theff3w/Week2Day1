const phones = [
    { name: "iphone XX", priceHT: 900 },
    { name: "iphone X", priceHT: 700 },
    { name: "iphone B", priceHT: 200 },
];


const TVA = 0.20;

const pricesTTC = phones.map(phone => ({
  name: phone.name,
  priceHT: phone.priceHT,
  priceTTC: phone.priceHT * (1 + TVA) 
}));

console.log(pricesTTC);