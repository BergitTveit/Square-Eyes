import { addToCart } from "../pages/cart.js";

export async function displayFilm(film, displaySectionName) {
  const displayContainer = document.querySelector(displaySectionName);

  const filmElements = document.createElement("div");
  filmElements.classList.add("film-item");

  const filmElement = document.createElement("a");
  filmElement.href = "/film/?id=" + film.id;

  const img = document.createElement("img");
  img.src = film.image;
  img.alt = film.title;

  const title = document.createElement("h4");
  title.textContent = film.title;

  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to cart";
  addToCartBtn.classList.add("button-style1");
  addToCartBtn.addEventListener(`click`, () => {
    addToCart(film);
    console.log(film.title);
    alert("button clicked ", film.title);
  });

  filmElement.append(img);
  filmElements.append(filmElement, title, addToCartBtn);
  displayContainer.append(filmElements);
}

export function displayFilms(filmList, displaySectionName) {
  filmList.forEach((film) => {
    displayFilm(film, displaySectionName);
  });
}
