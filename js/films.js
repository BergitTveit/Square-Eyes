import { fetchAllFilms } from "./api/api.js";
import { displayFilms } from "./render/list.js";
import { showLoader, hideLoader } from "./loader.js";
import { fetchFilmsAccordingToSearch } from "./search.js";

export async function filmsPage() {
  try {
    showLoader();

    const url = new URL(location.href);
    const searchValue = url.searchParams.get("search");

    let films;

    if (searchValue) {
      films = await fetchFilmsAccordingToSearch(searchValue);
    } else {
      films = await fetchAllFilms();
    }

    hideLoader();

    displayFilms(films, ".film-list");
  } catch (error) {
    hideLoader();
    console.error("An error occurred in the main function", error);
  }
}

filmsPage();
