import { getCities, getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js"
document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        /*
            The target of a click event is the most specific HTML element
            that was clicked by the user.
        */
        const itemClicked = clickEvent.target

        /*
            Only run the rest of the logic if a walker <li> was clicked
        */
        if (itemClicked.id.startsWith("walker")) {

            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).

                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.

                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU

                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [,walkerId] = itemClicked.id.split("--")
            /*
                Now that you have the primary key of a walker object,
                find the whole object by iterating the walkers array.
            */
            // for (const walker of walkers) {
            //     /*
            //         Compare the primary key of each walker to the one
            //         you have. As soon as you find the right one, display
            //         the window alert message.
            //     */
            //     if (walker.id === parseInt(walkerId)) {
            //         window.alert(`${walker.name} services ${walker.city}`)
            //     }
            // }// This for loop was for when a walker only serviced one city.
            for (const walker of walkers) {
                /*
                   this for loop is for when walkers service multiple cities.
                */
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerrCitiesByWalker(walker)
                    const walkerAssingments = walkerCityAssignments(assignments)
                    window.alert(`${walker.name} services ${walkerAssingments}`)
                }
            }
        }
    }
)

const walkers = getWalkers()
//this function will still be used to iterate thru the walker.
export const Walkers = () => {
    let walkerHTML = "<ul>"
    
    for (const walker of walkers) {
        // walkerHTML += `<li>${walker.name}</li>`
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }
    
    walkerHTML += "</ul>"
    
    return walkerHTML
}

const walkerCities = getWalkerCities()
//new fucntion to create an arrary for each walker since they have multiple cities they serve
//  a. iterate thru each walkerID in walkerCities
//  b. push cityID into walkerCities array (define the array)
//  c. check if pk of walker = fk on assignment.
//  d. return the array
export const filterWalkerrCitiesByWalker = (walker) => {
    const assignments = []
   
    for (const assignment of walkerCities){
        if (assignment.walkerId === walker.id){
            assignments.push(assignment)
        }
    }
    return assignments
}
//lines 92-95: start of loop to get the word and between the array (this is a stretch goal)
// for (assignment of assignments){
//     assignedWalkers = assignments.split(",")
//     assignedWalkers.push(assignment)
// }



// new function that takes array of matching objects, use thet cityID property on each one to find the matching city name.
// This function starts in line 48 and replaces one that existed for when walkers only were able to service one city.
//  a. define a string (to be a part of click event once built) that says the walker name and which city and/or cities they service.
//  b. iterate thru each assignment (array).
//  c. match the assignments array with each walker.
//  d. iterate thru assignments
//  e. add matching city to array of city names
//      i.see stretch goal in lines 91-95
//  g. return the string
const cities = getCities()
export const walkerCityAssignments = (assignments) => {
    let walkerAssingments = ""
    for (const assignment of assignments){
        for (const city of cities)
        if (assignment.cityId === city.id)
        walkerAssingments += ` ${city.name}`
    }
    return walkerAssingments
}