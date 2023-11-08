import { url } from "./constants.js";

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
