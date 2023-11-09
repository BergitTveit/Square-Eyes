import { url } from "../constants.js";

export async function fetchAllFilms() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Null");
    }
    const films = await response.json();
    console.log(films);
    return films;
  } catch (error) {
    console.log("There was an error with apicall", error);
  }
}

export async function fetchFilm(id) {
  try {
    const response = await fetch(url + id);

    if (!response.ok) {
      throw new Error("Null");
    }
    const film = await response.json();

    return film;
  } catch (error) {
    console.log("There was an error with apicall", error);
  }
}

export async function fetchFilmsSortedByRaiting(amount) {
  let films = await fetchAllFilms();
  films.sort((film1, film2) => film2.rating - film1.rating);

  return films.slice(0, amount);
}

export async function fetchFilmsSortedByReleased(amount) {
  let films = await fetchAllFilms();
  films.sort((film1, film2) => film2.released - film1.released);

  return films.slice(0, amount);
}

// export async function bestSeller (bestFilm){
// let films = fetchAllFilms();

// //
// if (films === bestFilm.title)
// }
