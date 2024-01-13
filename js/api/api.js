// js/api/api.js

import { url } from "../constants.js";

export async function fetchAllFilms() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch films. Status: ${response.status}`);
    }

    const getResults = await response.json();
    console.log(getResults);
    return getResults;
  } catch (error) {
    console.error("Error fetching films:", error);

    throw error;
  }
}

export async function fetchFilmById(filmId) {
  try {
    const filmUrl = new URL(`${url}/${filmId}`);
    console.log("Fetching film details. URL:", filmUrl.toString());

    const response = await fetch(filmUrl.toString());

    if (!response.ok) {
      throw new Error(
        `Failed to fetch film details. Status: ${response.status}`
      );
    }

    const film = await response.json();

    console.log("Fetched film details:", film);
    return film;
  } catch (error) {
    console.error("Error fetching film by ID:", error);
    throw error;
  }
}

export async function fetchFilmsSortedByRaiting(amount) {
  let films = await fetchAllFilms();
  films.sort(
    (film1, film2) =>
      parseInt(film2.average_rating) - parseInt(film1.average_rating)
  );

  return films.slice(0, amount);
}

function getReleasedYear(film) {
  const releasedAttribute = film.attributes.find(
    (attribute) => attribute.name === "released"
  );

  const releasedTerm = releasedAttribute?.terms?.[0];

  return releasedTerm ? parseInt(releasedTerm.name, 10) : 0;
}

export async function fetchFilmsSortedByReleased(amount) {
  try {
    let films = await fetchAllFilms();

    films.sort((film1, film2) => {
      const released1 = getReleasedYear(film1);
      const released2 = getReleasedYear(film2);
      return released2 - released1;
    });

    return films.slice(0, amount);
  } catch (error) {
    console.error("Error fetching and sorting films:", error);
    throw error;
  }
}

export async function fetchFilmsByGenre(genre) {
  const films = await fetchAllFilms();
  const filteredFilms = films.filter((film) => {
    return film.categories.some(
      (category) => category.name.toLowerCase() === genre.toLowerCase()
    );
  });
  console.log(filteredFilms);
  return filteredFilms;
}
