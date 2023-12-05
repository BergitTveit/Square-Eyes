let cart = [];

export async function addToCart(film) {
  const existingFilm = cart.find((filmInCart) => filmInCart.id === film.id);

  if (existingFilm) {
    alert("You have already addded this film to cart.");
  } else {
    cart.push({ film });
    console.log("CART:", cart);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function displayCart() {
  const cartFilmsContainer = document.querySelector(`.cart-items`);
  const cartTotalElement = document.querySelector(`.cart-total`);
  let total = 0;
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  cartFilmsContainer.innerHTML = ``;

  storedCart.forEach((cartItem) => {
    const cartFilm = cartItem.film;
    const cartFilmElement = document.createElement(`li`);
    cartFilmElement.textContent = `${cartFilm.title} - Price: ${cartFilm.price}`;

    const filmImg = document.createElement("img");
    filmImg.src = cartFilm.image;
    filmImg.alt = cartFilm.title;

    cartFilmElement.appendChild(filmImg);
    cartFilmsContainer.appendChild(cartFilmElement);

    total += cartFilm.price;
  });

  cartTotalElement.textContent = `${total.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  // Check if current page is cart.html and invoke displayCart
  if (window.location.pathname === "/cart.html") {
    displayCart();
  }

  const cartButton = document.querySelector(".cart-btn");
  cartButton.addEventListener("click", function () {
    window.location.href = "../cart.html";
  });
});
