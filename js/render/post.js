// js/render/post.js

export function displayFilmDetails(film) {
  console.log("Displaying film details:", film);
  const filmDetailsContainer = document.querySelector(".film-details");
  const filmTitle = document.createElement("h2");

  filmTitle.textContent = film.name;

  // filmDetailsContainer.innerHTML = film.name;

  filmDetailsContainer.appendChild(filmTitle);
}
