"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you already watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you already watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMuFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies you watched?', ''),
              b = prompt('How much would you rate it?', ''); 
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMuFilms();


/* let i = 0;

while (i < 2) {
    const a = prompt('One of the last movies you watched?', ''),
          b = prompt('How much would you rate it?', '');
    i++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
} */

/* let i = 0;

do {
    const a = prompt('One of the last movies you watched?', ''),
          b = prompt('How much would you rate it?', '');
    i++;
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
while (i < 2); */


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Few films watched');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are a classic spectator');
    } else if (personalMovieDB.count >= 30) {
        console.log('Are you a cinephile');
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);       
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}?`);
    }
}

writeYourGenres();