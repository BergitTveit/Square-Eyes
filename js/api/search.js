// import { fetchAllFilms } from "./api.js";
// import { displayFilms } from "../render/list.js";

// const search = document.querySelector("#searchInput");
// let typeTimer;
// const doneTypingInterval = 50;

// export async function fetchFilmsAccordingToSearch(searchText) {
//   const allFilms = await fetchAllFilms();
//   const filteredFilms = allFilms.filter((film) =>
//     film.title.toLowerCase().includes(searchText.toLowerCase())
//   );
//   console.log("Filtered Films:", filteredFilms);
//   return filteredFilms;
// }

// search.addEventListener("input", async (event) => {
//   clearTimeout(typeTimer);

//   typeTimer = setTimeout(async () => {
//     const searchValue = event.target.value.trim().toLowerCase();
//     window.history.replaceState(
//       {},
//       "",
//       `../films/index.html?search=${encodeURIComponent(searchValue)}`
//     );
//     localStorage.setItem("searchValue", searchValue);

//     const filteredFilms = await fetchFilmsAccordingToSearch(searchValue);
//     displayFilms(filteredFilms, ".film-list");
//   }, doneTypingInterval);
// });

// document.addEventListener("DOMContentLoaded", async () => {
//   const storedSearchValue = localStorage.getItem("searchValue");
//   if (storedSearchValue) {
//     search.value = storedSearchValue;
//     const filteredFilms = await fetchFilmsAccordingToSearch(storedSearchValue);
//     console.log("Filtered Films on Load:", filteredFilms);
//     displayFilms(filteredFilms, ".film-list");
//   }
// });
