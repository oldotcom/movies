"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('How many films have you already watched?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you already watched?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('One of the last movies you watched?', '').trim(), b = prompt('How much would you rate it?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('Few films watched');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('You are a classic spectator');
        } else if (personalMovieDB.count >= 30) {
            console.log('Are you a cinephile');
        } else {
            console.log('Error');
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            /* let genres = prompt(`Your favorite genre number ${i}?`, '');

            if (genres === '' || genres == null) {
                console.log('error');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            } */
            let genres = prompt(`Enter genres separated by commas`).toLowerCase();

            if (genres === '' || genres == null) {
                console.log('error');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            } 
        }

        personalMovieDB.genres.forEach((item, i) => {
                console.log(`Favorite genre #${i + 1} - ${item}`);
        });
    }
};