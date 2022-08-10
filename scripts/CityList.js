// import { getWalkers } from "./database.js"  info now from getCities as database expanded.
import { getCities } from "./database.js"
// const walkers = getWalkers()// commented as database expanded to include multiple cities in which a walker walked.
const cities = getCities()

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }
 
    citiesHTML += "</ul>"

    return citiesHTML
}

