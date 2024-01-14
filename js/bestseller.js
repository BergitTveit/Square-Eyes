// js/bestseller.js

import { fetchFilmsSortedByReleased } from "./api/api.js";

export async function fetchAndDisplayBestSeller() {
  try {
    let sortedFilms = await fetchFilmsSortedByReleased(1);

    const bestSellerFilm = sortedFilms[0];
    const bestSellerContainer = document.querySelector(".best-seller-cover");
    if (!bestSellerContainer) {
      console.error("Best seller container not found!");
      return;
    }

    const filmElement = document.createElement("a");
    filmElement.href = "/film/?id=" + bestSellerFilm.id;
    filmElement.className = "best-seller";

    const img = document.createElement("img");
    img.src = bestSellerFilm.images[0]?.src;
    img.alt = bestSellerFilm.title;
    img.className = "best-seller";

    const button = document.createElement("button");
    button.textContent = "Best Seller";
    button.className = "best-seller-button";
    button.setAttribute("type", "button");
    button.addEventListener("click", () => {
      window.location.href = filmElement.href;
    });

    filmElement.appendChild(img);
    filmElement.appendChild(button);
    bestSellerContainer.append(filmElement);
  } catch (error) {
    console.error("An error occurred", error);
  }
}

fetchAndDisplayBestSeller();
