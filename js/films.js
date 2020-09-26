// Create your variables here
// ==========================================
let numberOfSeasons = 6;
let numberOfEpisodes = 12;
let episodeTime = 45;
let commercialTime = 5;
let totalShowTime = (episodeTime + commercialTime) * numberOfEpisodes * numberOfSeasons;


// ==========================================

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season

Total viewing time: ${totalShowTime} minutes`



let episodeTitle = 'episode 1';
let episodeDuration = 45;
let hasBeenWatched = true;
// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`




// Create constants here
// =====================================
const hoursPerDay =24;
const minutesPerHour = 60;
const secondsPerMinute = 60;
// =====================================

const dayInput = document.querySelector('#day-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

calculateButton.addEventListener('click', () => {
    let days = dayInput.value;
    let calcHours = days * hoursPerDay;
    let calcMinutes = calcHours * minutesPerHour;
    let calcSeconds = calcMinutes * secondsPerMinute;

    hours.innerText = `${calcHours} hours`;
    minutes.innerText = `${calcMinutes} minutes`;
    seconds.innerText = `${calcSeconds} seconds`;
});







