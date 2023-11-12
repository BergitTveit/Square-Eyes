import { fetchFilm } from "./api/api.js";
import { displayFilmDetails } from "./render/post.js";

export async function updatePageTitle(filmId) {
  try {
    const film = await fetchFilm(filmId);

    if (film && film.title) {
      document.title = film.title;
    } else {
      console.log("Film data or Title is undefined");
    }
  } catch (error) {
    console.log("Error; Fail to fetch film details", error);
  }
}

document.addEventListener("click", async (event) => {
  if (event.target.classList.contains("film-link")) {
    const filmId = event.target.href.split("/film/?id=")[1];

    await updatePageTitle(filmId);
  }
});

export async function filmDetailPage() {
  try {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    await updatePageTitle(id);
    const film = await fetchFilm(id);

    displayFilmDetails(film);
  } catch (error) {
    console.error("An error occurred in the main function", error);
  }
}

filmDetailPage();
