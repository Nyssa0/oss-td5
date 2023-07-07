const fetch = require("node-fetch");

async function getFestivals() {

    let allFestivals = []
    return await fetch("https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&lang=fr&rows=1000")
        .then(response => {
            return response.json();
        })
        .then(response => {
            let data = response.records
            data.forEach(festival => {
                let name = festival.fields.nom_de_la_manifestation
                allFestivals.push({name: name})
            })
            return allFestivals
        })
        .catch(error => console.error('Error : ', error));
}

async function summerFestivals() {

    let months = [6, 7, 8, 9]
    let allSummerFestivals = []
    return await fetch("https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&lang=fr&rows=1000")
        .then(response => {
            return response.json();
        })
        .then(response => {
            let data = response.records
            data.forEach(festival => {

                let monthOfFestival = festival.fields.mois_indicatif_en_chiffre_y_compris_double_mois
                months.forEach( month => {
                    if (monthOfFestival === month) {
                        let name = festival.fields.nom_de_la_manifestation
                        allSummerFestivals.push({name: name, month: month})
                    }
                })
            })
            return allSummerFestivals
        })
        .catch(error => console.error('Error : ', error));
}

async function getFestivalsWithLocation(chosenRegion) {

    let allFestivals = []
    return await fetch("https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&lang=fr&rows=1000")
        .then(response => {
            return response.json();
        })
        .then(response => {
            let data = response.records
            data.forEach(festival => {
                let region = festival.fields.region
                if (region === chosenRegion) {
                    let name = festival.fields.nom_de_la_manifestation
                    allFestivals.push({name: name, region: region})
                }
            })
            return allFestivals
        })
        .catch(error => console.error('Error : ', error));
}
// module.exports = getFestivals
// module.exports = summerFestivals
module.exports = getFestivalsWithLocation