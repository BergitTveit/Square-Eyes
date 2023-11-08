import { fetchAllFilms } from "./api/api.js";
import { displayFilms } from "./render/list.js";

export async function filmsPage() {
  try {
    const allFilms = await fetchAllFilms();

    displayFilms(allFilms, ".film-list");
  } catch (error) {
    console.error("An error occurred in the main function", error);
  }
}

filmsPage();
