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