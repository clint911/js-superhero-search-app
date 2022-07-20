//simple script test
const getSuperHero() => {
    fetch('your-api-url');
    .then(response => response.json())
    .then(json => console.log(json.name))
    //gets the name--you can change anything to whatever you wish to get
    }

getSuperHero();
document.querySelector('body').innerHTML += '<img src= ${img} height=200 width=200/>`;


const newHeroButton = document.getElementById('newHeroButton');

const randomHero = () => {
    const numberOfHeroes = 731
    return Math.floor(Math.random() * numberOfHeroes) + 1;
    //the plus one makes the random number all inclusive

 }
newHeroButton.onclick = () => getSuperHero(randomHero());

const heroImageDiv = document.getElementById('heroImage');

const name = `<h2>${json.name}</h2>`

const intelligence = `<p>${json.powerStats.intelligence}</p>`

const strength = `<p>${json.powerStats.strength}</p>`
const searchButton = document.getElementById('searchButton');

//adding an event listener to the button
searchButton.onclick = () => searchHero();

//function that gets the stats
const getStatsHtml = [character] => {
    for (stat in character.powerStat) {
        Object.keys(character.powerStats).map(stat => {
              `<p>${stat}: ${character.powerStats[stat]}</p>`)
        }
    }
}




























