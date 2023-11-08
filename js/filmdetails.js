import { fetchFilm } from "./api/api.js";
import { displayFilmDetails } from "./render/post.js";

const resultsContainer = document.querySelector(".film-details");

export async function filmDetailPage() {
  try {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    const film = await fetchFilm(id);

    displayFilmDetails(film);
    console.log("FILM info  ", film);
  } catch (error) {
    console.error("An error occurred in the main function", error);
  }
}

filmDetailPage();
