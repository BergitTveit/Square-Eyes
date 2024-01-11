// import { fetchFilm } from "../api/api.js";
// import { displayFilmDetails } from "../render/post.js";
// import { handleError } from "../api/errorhandler.js";

// export async function updatePageTitle(filmId) {
//   try {
//     const film = await fetchFilm(filmId);

//     if (film && film.title) {
//       document.title = film.title;
//     } else {
//       throw new Error("Film data or Title is undefined");
//     }
//   } catch (error) {
//     document.title = "ERROR: can not fetch title";
//     console.error("Error: can not fetch title", error);
//   }
// }

// document.addEventListener("click", async (event) => {
//   if (event.target.classList.contains("film-link")) {
//     const filmId = event.target.href.split("/film/?id=")[1];

//     await updatePageTitle(filmId);
//   }
// });

// export async function filmDetailPage() {
//   const filmDetailsContainer = document.querySelector(".film-details");
//   try {
//     const url = new URL(location.href);
//     const id = url.searchParams.get("id");
//     await updatePageTitle(id);
//     const film = await fetchFilm(id);

//     displayFilmDetails(film);
//   } catch (error) {
//     filmDetailsContainer.innerHTML = handleError(
//       "Unable to fetch film details."
//     );
//   }
// }

// // filmDetailPage();
// import { fetchFilmById } from "../api/api.js";
// import { displayFilmDetails } from "../render/post.js";
// import { handleError } from "../api/errorhandler.js";

// // export async function updatePageTitle(filmId) {
// //   try {
// //     const film = await fetchFilmById(filmId);

// //     if (film && film.name) {
// //       document.title = film.name;
// //     } else {
// //       throw new Error("Film data or Title is undefined");
// //     }
// //   } catch (error) {
// //     document.title = "ERROR: can not fetch title";
// //     console.error("Error: can not fetch title", error);
// //   }
// // }

// // document.addEventListener("click", async (event) => {
// //   if (event.target.classList.contains("film-link")) {
// //     event.preventDefault(); // Prevent default link behavior
// //     const filmId = event.target.href.split("/film/?id=")[1];

// //     await updatePageTitle(filmId);
// //   }
// // });

// export async function filmDetailPage() {
//   const filmDetailsContainer = document.querySelector(".film-details");
//   try {
//     const url = new URL(location.href);
//     const id = url.searchParams.get("id");
//     // await updatePageTitle(id);
//     const film = await fetchFilmById(id);

//     displayFilmDetails(film);
//   } catch (error) {
//     filmDetailsContainer.innerHTML = handleError(
//       "Unable to fetch film details."
//     );
//   }
// }

// filmDetailPage();
