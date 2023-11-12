import { url } from "../constants.js";

export async function fetchAllFilms() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch films. Status:", response.status);
    }
    const films = await response.json();

    return films;
  } catch (error) {
    console.log("There was an error in fetchAllFilms:", error); //create error message function instead
    throw error;
  }
}

export async function fetchFilm(id) {
  const response = await fetch(url + id);

  if (!response.ok) {
    throw new Error("Failed to fetch film details. Status:", response.status);
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
