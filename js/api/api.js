import { url } from "../constants.js";
// const productContainer = document.querySelector(".film-list");

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

export async function fetchFilm(id) {
  const response = await fetch(url + id);
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch film Status:", response.status);
  }
  const film = await response.json();

  return film;
}

export async function fetchFilmsSortedByRaiting(amount) {
  let films = await fetchAllFilms();
  films.sort(
    (film1, film2) =>
      parseInt(film2.average_rating) - parseInt(film1.average_rating)
  );

  return films.slice(0, amount);
}

export async function fetchFilmsSortedByReleased(amount) {
  let films = await fetchAllFilms();
  films.sort(
    (film1, film2) => new Date(film2.released) - new Date(film1.released)
  );

  return films.slice(0, amount);
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
