export async function displayFilmDetails(film) {
  const filmElement = document.createElement("a");
  filmElement.href = "/film/?id=" + film.id;
  filmElement.class = "film-link";

  const img = document.createElement("img");
  img.src = film.image;
  img.alt = film.title;

  filmElement.append(img);

  const filmDetailsContainer = document.querySelector(".film-details");
  filmDetailsContainer.append(filmElement);
}
