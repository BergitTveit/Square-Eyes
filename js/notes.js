async function fetchAllFilms() {
  try {
    const baseUrl = "https://api.noroff.dev/api/v1/";
    const endpoint = "square-eyes";
    const url = baseUrl + endpoint;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Null");
    }
    const films = await response.json();

    return films;
  } catch (error) {
    console.log("There was an error with apicall", error);
  }
}

async function displayFilms(films) {
  const resultsContainer = document.querySelector(".film-list");

  try {
    resultsContainer.innerHTML = "";

    films.forEach(function (film) {
      resultsContainer.innerHTML += `<a href="${film.url}" class="film-link">
            <div class="film">
              <img src="${film.image}" alt="${film.title}" />
              <h4>${film.title}</h4>
            </div>
          </a>
        `;
    });
  } catch (error) {
    console.log("Error fetching films", error);
    resultsContainer.innerHTML = "error";
  }
}

async function fetchFilmsSortedByRaiting(amount) {
  let films = await fetchAllFilms();
  films.sort((film1, film2) => film2.rating - film1.rating);

  return films.slice(0, amount);
}

async function main() {
  try {
    let allFilms = await fetchAllFilms();
    let sortedFilms = await fetchFilmsSortedByRaiting(3);

    displayFilms(allFilms);
  } catch (error) {
    console.error("An error occurred in the main function", error);
  }
}

main();

//FIRST CODE FOR FILMS RENDERING PAGE
// export async function displayFilms(films) {
//   const resultsContainer = document.querySelector(".film-list");

//   try {
//     resultsContainer.innerHTML = "";

//     films.forEach(function (film) {
//       resultsContainer.innerHTML += `<a href="/film/?id=${film.id}" class="film-link">
//               <div class="film">
//                 <img src="${film.image}" alt="${film.title}" />
//                 <h4>${film.title}</h4>
//               </div>
//             </a>
//           `;
//     });
//   } catch (error) {
//     console.log("Error fetching films", error);
//     resultsContainer.innerHTML = "error";
//   }
// }
