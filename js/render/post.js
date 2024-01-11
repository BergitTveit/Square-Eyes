// import { addToCart } from "../pages/cart.js";

// export async function displayFilmDetails(film) {
//   const filmDetailsContainer = document.querySelector(".film-details");
//   const filmTitle = document.querySelector(".film-title");
//   const filmDetails = document.querySelector(".film-info");
//   const filmRealease = document.querySelector(".release");
//   const filmPrice = document.querySelector(".price");

//   const filmElement = document.createElement("a");
//   filmElement.href = film.permalink;
//   filmElement.className = "film-link";

//   const img = document.createElement("img");
//   img.src = film.images[0]?.src;
//   img.alt = film.name;

//   filmElement.append(img);
//   filmDetailsContainer.prepend(filmElement);

//   filmTitle.textContent = film.name;
//   filmDetails.textContent = film.categories.description;
//   filmRealease.textContent = film.released;
//   filmPrice.textContent = film.price;

//   const favorite = document.createElement("button");
//   favorite.textContent = "Favorite";
//   favorite.className = "cta ";
//   favorite.addEventListener("click", () => {
//     alert("button clicked!");
//   });
//   filmDetailsContainer.prepend(favorite);

//   const addToCartBtn = document.createElement("button");
//   addToCartBtn.textContent = "Add to cart";
//   addToCartBtn.className = "button-style1";
//   addToCartBtn.addEventListener("click", () => {
//     addToCart(film);
//     alert("Added to cart: " + film.title);
//   });
// //   filmDetailsContainer.appendChild(addToCartBtn);
// // }
// import { addToCart } from "../pages/cart.js";

// export async function displayFilmDetails(film) {
//   const filmDetailsContainer = document.querySelector(".film-details");
//   const filmTitle = document.querySelector(".film-title");
//   const filmDetails = document.querySelector(".film-info");
//   const filmRealease = document.querySelector(".release");
//   const filmPrice = document.querySelector(".price");

//   const filmElement = document.createElement("a");
//   filmElement.href = film.permalink;
//   filmElement.className = "film-link";

//   const img = document.createElement("img");
//   img.src = film.images[0]?.src;
//   img.alt = film.name;

//   filmElement.append(img);
//   filmDetailsContainer.prepend(filmElement);

//   filmTitle.textContent = film.name;
//   filmDetails.innerHTML = film.description; // Use innerHTML to render HTML content
//   filmRealease.textContent = film.released;
//   filmPrice.innerHTML = film.price_html; // Use innerHTML to render formatted price

//   const favorite = document.createElement("button");
//   favorite.textContent = "Favorite";
//   favorite.className = "cta ";
//   favorite.addEventListener("click", () => {
//     alert("button clicked!");
//   });
//   filmDetailsContainer.prepend(favorite);

//   const addToCartBtn = document.createElement("button");
//   addToCartBtn.textContent = film.add_to_cart.text;
//   addToCartBtn.className = "button-style1";
//   addToCartBtn.addEventListener("click", () => {
//     addToCart(film);
//     alert("Added to cart: " + film.name);
//   });
//   filmDetailsContainer.appendChild(addToCartBtn);
// }
// import { addToCart } from "../pages/cart.js";

// export async function displayFilmDetails(film) {
//   const filmDetailsContainer = document.querySelector(".film-details");
//   const filmTitle = document.querySelector(".film-title");
//   const filmDetails = document.querySelector(".film-info");
//   const filmRealease = document.querySelector(".release");
//   const filmPrice = document.querySelector(".price");

//   const filmElement = document.createElement("a");
//   filmElement.href = "/film/?id=" + film.id;
//   filmElement.className = "film-link";

//   const img = document.createElement("img");
//   img.src = film.image;
//   img.alt = film.title;

//   filmElement.append(img);
//   filmDetailsContainer.prepend(filmElement);

//   filmTitle.textContent = film.title;
//   filmDetails.textContent = film.description;
//   filmRealease.textContent = film.released;
//   filmPrice.textContent = film.price;

//   const favorite = document.createElement("button");
//   favorite.textContent = "Favorite";
//   favorite.className = "cta ";
//   favorite.addEventListener("click", () => {
//     // add event here)
//     //add if button clicked add class favorite
//     alert("button clicked!");
//   });
//   filmDetailsContainer.prepend(favorite);

//   const addToCartBtn = document.createElement("button");
//   addToCartBtn.textContent = "Add to cart";
//   addToCartBtn.className = "button-style1";
//   addToCartBtn.addEventListener("click", () => {
//     addToCart(film);
//     alert("Added to cart: " + film.title);
//   });
//   filmDetailsContainer.appendChild(addToCartBtn);
// }
// render/post.js
import { fetchFilmById } from "../api/api.js";
import { addToCart } from "../pages/cart.js";

export async function updatePageTitle(filmId) {
  try {
    const film = await fetchFilmById(filmId);

    if (film && film.name) {
      document.title = film.name;
    } else {
      throw new Error("Film data or Title is undefined");
    }
  } catch (error) {
    document.title = "ERROR: can not fetch title";
    console.error("Error: can not fetch title", error);
  }
}

// export async function updatePageTitle(filmTitle) {
//   try {
//     if (filmTitle) {
//       console.log("Film title:", filmTitle);
//       document.title = filmTitle;
//     } else {
//       throw new Error("Film title is undefined");
//     }
//   } catch (error) {
//     document.title = "ERROR: cannot fetch title";
//     console.error("Error: cannot fetch title", error);
//   }
// }

export async function displayFilmDetails(film) {
  const filmDetailsContainer = document.querySelector(".film-details");
  const filmTitle = document.querySelector(".film-title");
  const filmDetails = document.querySelector(".film-info");
  const filmRelease = document.querySelector(".release");
  const filmPrice = document.querySelector(".price");

  const filmElement = document.createElement("a");
  filmElement.href = `/film/?id=${film.id}`;
  filmElement.className = "film-link";

  const img = document.createElement("img");
  img.src = film.images[0]?.src;
  img.alt = film.name;

  filmElement.append(img);
  filmDetailsContainer.prepend(filmElement);

  filmTitle.textContent = film.name;
  filmDetails.innerHTML = film.description; // Use innerHTML to render HTML content
  filmRelease.textContent = film.released;
  filmPrice.textContent = film.prices.price_html;

  const favorite = document.createElement("button");
  favorite.textContent = "Favorite";
  favorite.className = "cta";
  favorite.addEventListener("click", () => {
    // Add event here
    // Add if button clicked add class favorite
    alert("Button clicked!");
  });
  filmDetailsContainer.prepend(favorite);

  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to cart";
  addToCartBtn.className = "button-style1";
  addToCartBtn.addEventListener("click", () => {
    addToCart(film);
    alert("Added to cart: " + film.name);
  });
  filmDetailsContainer.appendChild(addToCartBtn);
}

export async function filmDetailPage() {
  const filmDetailsContainer = document.querySelector(".film-details");
  const filmTitleElement = document.querySelector(".film-title");

  try {
    const url = new URL(location.href);
    const filmId = url.searchParams.get("id");

    if (filmId) {
      const film = await fetchFilmById(filmId);

      // Update page title
      await updatePageTitle(film.name);

      // Display film details
      displayFilmDetails(film);

      // Set film title in the filmTitleElement if needed
      if (filmTitleElement) {
        filmTitleElement.textContent = film.name;
      }

      // Add event listeners or any other operations specific to the film detail page
      // ...
    } else {
      throw new Error("Film ID is undefined");
    }
  } catch (error) {
    filmDetailsContainer.innerHTML = handleError(
      "Unable to fetch film details."
    );
    console.error("Error fetching film details:", error);
  }
}

// Call the filmDetailPage function when the page loads
filmDetailPage();
