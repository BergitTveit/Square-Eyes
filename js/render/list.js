export async function displayFilm(film, displaySectionName) {
  const displayContainer = document.querySelector(displaySectionName);

  const filmElement = document.createElement("a");
  filmElement.href = "/film/?id=" + film.id;

  const img = document.createElement("img");

  img.src = film.image;
  img.alt = film.title;

  filmElement.append(img);

  const title = document.createElement("h4");
  title.textContent = film.title;

  filmElement.append(title);
  displayContainer.append(filmElement);
}

export function displayFilms(filmList, displaySectionName) {
  console.log("DISPLAY FILMS LIST:", filmList);
  filmList.forEach((film) => {
    displayFilm(film, displaySectionName);
  });
}
