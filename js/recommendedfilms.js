import { fetchAllFilms } from "./api/api.js";
import { displayFilms } from "./render/list.js";

export async function displayRecommendedFilms(film) {
  const recommendedContainer = document.querySelector(".recommendations");

  const filmElement = document.createElement("a");
  filmElement.href = "/film/?id=" + film.id;
  filmElement.className = "film-link";

  const img = document.createElement("img");
  img.src = film.image;
  img.alt = film.title;

  recommendedContainer.append(dsfdjshfs);
}

async function main() {
  try {
    let sortedFilms = await fetchFilmsSortedByRaiting(3);

    displayFilms(sortedFilms);
  } catch (error) {
    console.error("An error occurred in the main function", error);
  }
}

main();
