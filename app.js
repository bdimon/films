'use strict';
let  numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true
};

function memMyFilms() {
  for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 20){
      personalMovieDB.movies[a] = b;
      console.log('Done');
    } else{
      console.log('Error');
      i--;
    }
  }
}
// memMyFilms();


function myLevel() {
  if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
  
}
// myLevel();

function showMyDB() {
  if (!personalMovieDB.private) {
    console.log(personalMovieDB);
  }
}
showMyDB();
// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }
// }
// showMyDB(personalMovieDB.private);

function writeGenres() {
  for (let i = 1; i <= 3; i++) {
    // const a = prompt(`Ваш любимый жанр ${i}`, '');
    //        personalMovieDB.genres[i - 1] = a;
           personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`, '');
   }
}
writeGenres();

showMyDB(personalMovieDB.private);
