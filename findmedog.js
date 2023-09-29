const allDogs = [
    {
        dogName: "Abby",
        breed: "SharPei",
        age: 7
    },

    {
        dogName: "Akino",
        breed: "Husky",
        age: 5

    },
    {
        dogName: "Astro",
        breed: "German Shepherd/Mix",
        age: 3

    },
    {
        dogName: "Aunt Millie",
        breed: "Terrier Staffordshire/Bull Mix",
        age: 6

    },
    {
        dogName: "Azurra",
        breed: "Terrier, Pit bull/Akita",
        age: 4

    },
    {
        dogName: "Bear",
        breed: "Australian Kelpie/Mix",
        age: 3

    },
    {
        dogName: "Beau",
        breed: "Great Pyrenees/Mix",
        age: 1

    },
    {
        dogName: "Bella",
        breed: "Terrier, American Pit Bull/Boxer",
        age: 10

    },
    {
        dogName: "Benji",
        breed: "Retriver, Lab/Chow Chow",
        age: 6

    },
    {
        dogName: "Bently",
        breed: "Rottweiler/Shepherd",
        age: 2

    },
];

function findDogsAge(){
    //get the user input
    const minAgeInput = document.querySelector('input[name="petAge"]');
    const minAge=parseInt(minAgeInput.value);
     
    //Array to store selected dogs
    const selectedDogs = [];

    //find dogs and use the for each method
    allDogs.forEach((dog) => {
        if(dog.age >= minAge) {
            selectedDogs.push(dog);
        }
    });
    //Display the selected doginfo on the webpage
    const selectedDogsOutput = document.querySelector(".selectedDogs");
    selectedDogsOutput.innerHTML = ""; // Clear previous results
    
    if (selectedDogs.length > 0) {

        //sort the age 
        selectedDogs.sort((a, b) => a.age - b.age);
        // If there are selected dogs, display their information
        selectedDogs.forEach((dog) => {
            const dogInfo = document.createElement("p");
            dogInfo.innerHTML = `Dog Name: ${dog.dogName}<br> 
            Breed: ${dog.breed}<br>
            Age: ${dog.age} years old.`;
            selectedDogsOutput.appendChild(dogInfo);
        });
    } else {
        // If no dogs match the criteria, display a message
        selectedDogsOutput.textContent = "No dogs match the criteria.";
    }
}






