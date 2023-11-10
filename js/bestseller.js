import { fetchFilmsSortedByReleased } from "./api/api.js";
import { displayFilms } from "./render/list.js";

export async function displayBestSellerFilm(film) {
  const bestSellerContainer = document.querySelector(".best-seller-cover");

  const filmElement = document.createElement("a");
  filmElement.href = "/film/?id=" + film.id;
  filmElement.className = "film-link";

  const img = document.createElement("img");
  img.src = film.image;
  img.alt = film.title;
  img.className = "best-seller";

  filmElement.appendChild(img);
  bestSellerContainer.append(filmElement);
}

async function main() {
  try {
    let sortedFilms = await fetchFilmsSortedByReleased(1);
    displayFilms(sortedFilms, ".best-seller-cover");
  } catch (error) {
    console.error("An error occurred in the main function", error);
  }
}

main();
