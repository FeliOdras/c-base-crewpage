const factsData = {
    "crewname": "odras",
    "member since": "2002",
    "former crew activities": [
      "cyptor", 
      "member of board", 
      "c-minarorga", 
      "weltenbaulab reconstructioneer"
    ],
    "current crew activities": "cultorga",
    "profession": "frontend developer",
    "skills": [
        "frontend technologies",
        "sass/scss/css",
        "html",
        "javascript",
        "wordpress",
        "drupal"
      ],
    "other interests": [
        "creative writing",
        "role playing games",
        "japanese sword art and fighting",
        "aikido"
      ]
  
}


const factsContainer = document.querySelector('[data-js-content="facts"]');
let factsContent = "";


for(fact in factsData) {

    console.log(Array.isArray(factsData[fact]))
    if (Array.isArray(factsData[fact]) ) {
        // console.log("Array")
    }
 factsContent = `${factsContent} <div class="fact"><div class="label">${fact}</div><div class="value">${factsData[fact]}</div>`
}
// console.log(factsContent)
// console.log(factsContainer)
factsContainer.innerHTML = factsContent;