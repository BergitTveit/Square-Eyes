let cart = [];

export function addToCart(film) {
  const existingFilm = cart.find((filmInCart) => filmInCart.id === film.id);

  if (existingFilm) {
    alert("You have already addded this film to cart.");
  } else {
    cart.push({ film });
  }
  displayCart();
}

function displayCart() {
  const cartFilmsContainer = document.querySelector(`.cart-items`);
  const cartTotalElement = document.querySelector(`cart-total`);
  let total = 0;

  cartFilmsContainer.innerHTML = ``;

  cart.forEach((film) => {
    const cartFilmElement = document.createElement(`li`);
    cartFilmElement.textContent = `${film.title} - Price: ${film.price}`;
    const filmImg = document.createElement("img");
    filmImg.src = film.image;
    filmImg.alt = film.title;

    cartFilmsContainer.appendChild(cartFilmElement, filmImg);

    total += film.price;
  });

  cartTotalElement = `${total.toFixed(2)}`;
}
