console.log("Hello World")

// Sample data array from the API
const dataArray = [
    "Frankenstein",
    "Dracula",
    "Vampire",
    "Chucky",
    "T-Rex",
    "Voldemort",
    "Wednesday"
]

const costumesContainer = document.getElementById("costumesContainer")
console.log(costumesContainer)

renderData()

function createNewEntry(list, costume) {
    // Create list items
    const newCostumeEntry = document.createElement("li")
    newCostumeEntry.innerText = costume

    // Create and append a remove button
    const removeButton = document.createElement("button")
    removeButton.innerText = `Remove ${costume}`

    // Add functionality to the remove button
    removeButton.addEventListener("click", () => {
        removeCostumeFromList(list, newCostumeEntry)
    })

    newCostumeEntry.appendChild(removeButton)
    list.appendChild(newCostumeEntry)
}

function renderData() {
    const costumesContainerList = document.createElement("ul")
    costumesContainerList.id = "costumesContainerList"

    dataArray.forEach((costume) => {
        console.log(costume)
        createNewEntry(costumesContainerList, costume)
    })

    costumesContainer.appendChild(costumesContainerList)
}

function removeCostumeFromList(list, entry) {
    list.removeChild(entry)
}

const formInputButton = document.querySelector("#formInputButton")
formInputButton.addEventListener("click", (event) => {
    addCostumeToList(event)
})

function addCostumeToList(event) {
    event.preventDefault()

    // Get the form
    const costumeForm = document.getElementById("costumeInputForm")
    
    // Check if the form is valid
    const isFormValid = costumeForm.checkValidity()

    if (!isFormValid) {
        costumeForm.reportValidity()
        return
    }

    // Get the input field value
    const newCostumeInput = document.getElementById("costumeInputText")

    const costumesContainerList = document.getElementById("costumesContainerList")

    // Call createNewEntry to add the new costume entry to the list
    createNewEntry(costumesContainerList, newCostumeInput.value)

    // Clear the input field after adding
    newCostumeInput.value = ""
    newCostumeInput.focus()
}
