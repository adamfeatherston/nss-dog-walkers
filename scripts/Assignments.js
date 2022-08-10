import { getPets, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pets, walkers) => {
    let petWalker = null

    for (const walker of walkers){
        if (walker.id === pets.walkerId) {
                petWalker = walker
            }
                }
        return petWalker 
}

// let currentPetWalker = findWalker() this was invoked in Assignments()


export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<bl>"

    for (const currentPet of pets) {
        let currentPetWalker = findWalker(currentPet, walkers)// getWalkers function was called instead of findWalker
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    }

    assignmentHTML += "</bl>"

    return assignmentHTML
}

