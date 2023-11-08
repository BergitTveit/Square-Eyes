export async function displayFilmDetails(film) {
  const filmDetailsContainer = document.querySelector(".film-details");
  const filmTitle = document.querySelector(".film-title");
  const filmDetails = document.querySelector(".film-info");

  const filmElement = document.createElement("a");
  filmElement.href = "/film/?id=" + film.id;
  filmElement.class = "film-link";

  const img = document.createElement("img");
  img.src = film.image;
  img.alt = film.title;

  filmElement.append(img);
  filmDetailsContainer.prepend(filmElement);

  filmTitle.textContent = film.title;
  filmDetails.textContent = film.description;
}
