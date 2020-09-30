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



class Episode {
    constructor(title, duration, minutesWatched) {
        this.title = title;
        this.duration = duration;

        if (minutesWatched == duration) {
            this.hasBeenWatched = true;
        } else if (minutesWatched< duration) {
            this.hasBeenWatched = false;
        }

    }
}

let firstEpisode = new Episode('Dark Beginnings', 45, 45);
let secondEpisode = new Episode('The Mystery Continues', 45, 10);
let thirdEpisode = new Episode('An Unexpected Climax', 60, 0);

let episodes = [firstEpisode, secondEpisode, thirdEpisode];

const body = document.querySelector('body');

for(let i = 0; i < 3; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('series-frame');
    let newTitle = document.createElement('h2');
    newTitle.innerText = 'The Story of Tau';
    let newParagraph = document.createElement('p');
    newParagraph.innerText = `${episodes[i].title}
${episodes[i].duration} minutes
${episodes[i].hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
    newDiv.append(newTitle);
    newDiv.append(newParagraph);
    body.append(newDiv);
}
