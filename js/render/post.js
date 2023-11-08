const resultsContainer = document.querySelector(".film-list");

export async function displayFilm(film) {
  resultsContainer.innerHTML += `<a href="/film/?id=${film.id}" class="film-link">
                                      <div class="film">
                                      <img src="${film.image}" alt="${film.title}" />
                                      <h4>${film.title}</h4>
                                      </div>
                                      </a>
                                      `;
}

export function displayFilms(filmList) {
  resultsContainer.innerHTML = "";
  filmList.forEach(displayFilm);
}
