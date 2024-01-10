import { fetchAllFilms } from "../api/api.js";
import { displayFilms } from "../render/list.js";

export async function filmsPage() {
  try {
    const films = await fetchAllFilms();

    if (films) {
      displayFilms(films, ".film-list");
    }
  } catch (error) {
    console.error("Error fetching films:", error);
  }
}

filmsPage();
