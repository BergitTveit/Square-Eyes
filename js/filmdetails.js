import { fetchFilm } from "./post.js";

const resultsContainer = document.querySelector(".film-details");

export async function filmDetailpage() {
  try {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    const film = await fetchFilm(id);
    console.log("FILM info  ", film);
  } catch (error) {
    console.error("An error occurred in the main function", error);
  }
}

export async function displayFilm(film) {
  resultsContainer.innerHTML += `<a href="/film/?id=${film.id}" class="film-link">
                                      <div class="film">
                                      <img src="${film.image}" alt="${film.title}" />
                                      <h4>${film.title}</h4>
                                      </div>
                                      </a>
                                      `;
}
filmDetailpage();
