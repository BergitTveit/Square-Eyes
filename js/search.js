import { fetchAllFilms } from "./api/api.js";
import { displayFilms } from "./render/list.js";

const search = document.querySelector("#searchInput");

export async function fetchFilmsAccordingToSearch(searchText) {
  const allFilms = await fetchAllFilms();
  const filteredFilms = allFilms.filter((film) =>
    film.title.toLowerCase().includes(searchText)
  );

  return filteredFilms;
}

search.addEventListener("keyup", async () => {
  if (event.key === "Enter") {
    const searchValue = event.target.value.trim().toLowerCase();
    window.location.href =
      "../films/index.html?search=" + encodeURIComponent(searchValue);
  }
});
