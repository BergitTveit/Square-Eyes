import { fetchAllFilms } from "./api/api.js";
import { displayFilms } from "./render/list.js";

export async function filmspage() {
  try {
    const allFilms = await fetchAllFilms();

    displayFilms(allFilms);
  } catch (error) {
    console.error("An error occurred in the main function", error);
  }
}

filmspage();
