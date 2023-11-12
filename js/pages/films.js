import { fetchAllFilms } from "../api/api.js";
import { displayFilms } from "../render/list.js";
import { showLoader, hideLoader } from "../loader.js";
import { fetchFilmsAccordingToSearch } from "../api/search.js";
import { handleError } from "../api/errorhandler.js";

export async function filmsPage() {
  const filmListContainer = document.querySelector(".film-list");
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
    filmListContainer.innerHTML = handleError(" Unable to load film page");
  }
}

filmsPage();
