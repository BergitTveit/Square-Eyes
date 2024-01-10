import { addToCart } from "../pages/cart.js";

export async function displayFilmDetails(film) {
  const filmDetailsContainer = document.querySelector(".film-details");
  const filmTitle = document.querySelector(".film-title");
  const filmDetails = document.querySelector(".film-info");
  const filmRealease = document.querySelector(".release");
  const filmPrice = document.querySelector(".price");

  const filmElement = document.createElement("a");
  filmElement.href = "/film/?id=" + film.id;
  filmElement.className = "film-link";

  const img = document.createElement("img");
  img.src = film.image;
  img.alt = film.title;

  filmElement.append(img);
  filmDetailsContainer.prepend(filmElement);

  filmTitle.textContent = film.title;
  filmDetails.textContent = film.description;
  filmRealease.textContent = film.released;
  filmPrice.textContent = film.price;

  const favorite = document.createElement("button");
  favorite.textContent = "Favorite";
  favorite.className = "cta ";
  favorite.addEventListener("click", () => {
    alert("button clicked!");
  });
  filmDetailsContainer.prepend(favorite);

  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to cart";
  addToCartBtn.className = "button-style1";
  addToCartBtn.addEventListener("click", () => {
    addToCart(film);
    alert("Added to cart: " + film.title);
  });
  filmDetailsContainer.appendChild(addToCartBtn);
}
