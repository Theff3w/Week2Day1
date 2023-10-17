let prixHT;
const TVA = 20;

function calculerPrixTTC(prixHT, TVA) {
    prixHT = parseFloat(prixHT);
    TVA = parseFloat(TVA);

    if (isNaN(prixHT) || isNaN(TVA)) {
        return "Stoplé met des nombres";
    }

    prixTTC = prixHT + (prixHT * TVA / 100);

    return prixTTC.toFixed(2);
}

let r = calculerPrixTTC(50, TVA);
console.log(r);

function sumTTC(prices, TVA = 0.20) {
    if (!Array.isArray(prices)) {
        return "Les prix doivent être fournis sous forme de tableau.";
    }

    let totalTTC = 0;
    for (let price of prices) {
        const priceHT = parseFloat(price);
        if (isNaN(priceHT)) {
        return "Les prix doivent être des nombres valides.";
    }
      totalTTC += priceHT * (1 + TVA);
    }

    return totalTTC.toFixed(2);
}
