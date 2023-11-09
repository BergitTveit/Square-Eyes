import { fetchFilmsSortedByReleased } from "./api/api.js";
import { displayFilms } from "./render/list.js";

export async function displayBestSellerFilm(film) {
  const bestSellerContainer = document.querySelector(".best-seller");
  //   const img = document.createElement("img");

  //   img.src = film.image;
  //   img.alt = film.title;
  //   img.className = "film-img";

  const filmElement = document.createElement("a");
  filmElement.href = "/film/?id=" + film.id;
  filmElement.className = "film-link ";

  //   const backgroundDiv = document.createElement("div");
  //   backgroundDiv.style.backgroundImage = `url(${film.image})`;
  //   backgroundDiv.style.backgroundSize = "contain";
  //   backgroundDiv.style.backgroundPosition = "center";
  //   backgroundDiv.style.backgroundRepeat = "no-repeat";
  //   backgroundDiv.style.height = "50vh"; // Set your fixed height
  //   backgroundDiv.style.width = "100%";

  //   filmElement.appendChild(img);

  bestSellerContainer.append(filmElement);
}

async function main() {
  try {
    let sortedFilms = await fetchFilmsSortedByReleased(1);

    displayFilms(sortedFilms, ".best-seller");
  } catch (error) {
    console.error("An error occurred in the main function", error);
  }
}

main();
