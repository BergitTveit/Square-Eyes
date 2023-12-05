import { url } from "../constants.js";

export async function fetchAllFilms() {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch films. Status:", response.status);
  }
  const films = await response.json();
  console.log(films);
  return films;
}

export async function fetchFilm(id) {
  const response = await fetch(url + id);

  if (!response.ok) {
    throw new Error("Failed to fetch film Status:", response.status);
  }
  const film = await response.json();

  return film;
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
export async function fetchFilmsByGenre(genre) {
  const films = await fetchAllFilms();
  const filteredFilms = films.filter((film) => film.genres.includes(genre));
  console.log(filteredFilms);
  return filteredFilms;
}
