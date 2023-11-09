import { fetchAllFilms } from "./api/api.js";
import { displayFilms } from "./render/list.js";
import { showLoader, hideLoader } from "./loader.js";

export async function filmsPage() {
  try {
    showLoader();
    const allFilms = await fetchAllFilms();
    hideLoader();
    displayFilms(allFilms, ".film-list");
  } catch (error) {
    hideLoader();
    console.error("An error occurred in the main function", error);
  }
}

filmsPage();
