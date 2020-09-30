// Create your variables here
// ==========================================
let numberOfSeasons = 6;
let numberOfEpisodes = 12;
let episodeTime = 45;
let commercialTime = 5;
let totalShowTime = (episodeTime + commercialTime) * numberOfEpisodes * numberOfSeasons;
let episodeTitle = 'episode 1';
let episodeDuration = 45;
let hasBeenWatched = true;

// ==========================================

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season

Total viewing time: ${totalShowTime} minutes`



// Constante
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



// ==========================================
// objet

episode = {title:'titre 1', duration: '45', hasBeenWatched: 'true',};
let episodetitle = episode.title;
let episodeduration = episode.duration;
let episodehasBeenWatched = episode.hasBeenWatched;

// =========================================

document.querySelector('#episode-info').innerText = `Episode: ${episodeTitle}
Duration: ${episodeDuration} min
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`

// ==========================================
// class

class Episode {
    constructor(title,duration,hasBeenWatched) {
        this.title = title;
        this.duration = duration;
        this.hasBeenWatched = hasBeenWatched;
    }
}


let firstEpisode = new Episode("episode 1", 45, true);
let secondEpisode = new Episode("episode 2", 45, true);
let thirdEpisode = new Episode("episode 3", 45, false);
// =====================================

document.querySelector('#first-episode-info').innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#second-episode-info').innerText = `Episode: ${secondEpisode.title}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#third-episode-info').innerText = `Episode: ${thirdEpisode.title}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

// array
// ====================================

let episodes = [firstEpisode, secondEpisode, thirdEpisode];

// ====================================

const body = document.querySelector('body');

for(let i = 0; i < 12; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('series-frame');
    let newTitle = document.createElement('h2');
    newTitle.innerText = 'The Story of Tau';
    let newParagraph = document.createElement('p');
    newParagraph.innerText = `${episodes[i].title}
${episodes[i].duration} minutes
${episodes[i].hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;
    newDiv.append(newTitle);
    newDiv.append(newParagraph);
    body.append(newDiv);
}


