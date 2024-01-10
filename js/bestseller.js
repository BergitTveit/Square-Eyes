import { fetchFilmsSortedByReleased } from "./api/api.js";

export async function fetchAndDisplayBestSeller() {
  console.log("Fetching films and displaying bestseller film");

  try {
    let sortedFilms = await fetchFilmsSortedByReleased(1);
    console.log("Fetched films:", sortedFilms);

    const bestSellerFilm = sortedFilms[0]; // Assuming the bestseller is the first film in the sorted list

    const bestSellerContainer = document.querySelector(".best-seller-cover");
    if (!bestSellerContainer) {
      console.error("Best seller container not found!");
      return; // Exit the function if the container is not found
    }

    const filmElement = document.createElement("a");
    filmElement.href = "/film/?id=" + bestSellerFilm.id;
    filmElement.className = "best-seller";

    const img = document.createElement("img");
    img.src = bestSellerFilm.image;
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
    console.log("Bestseller film displayed");
  } catch (error) {
    console.error("An error occurred", error);
  }
}

fetchAndDisplayBestSeller();
