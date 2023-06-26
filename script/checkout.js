
const products = JSON.parse(localStorage.getItem('jackets'));


const cartItemsContainer = document.querySelector('.cart-item');

function renderCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
  cartItems.forEach(item => {
    cartItemsContainer.innerHTML += `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${item.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.price}</p>
            <select class="jacket">
              <option>select size</option>
              <option value="size">2-3yrs</option>
              <option value="size">3-4yrs</option>
              <option value="size">4-5yrs</option>
              <option value="size">5-6yrs</option>
              <option value="size">7-8yrs</option>
              <option value="size">S</option>
              <option value="size">M</option>
              <option value="size">L</option>
              <a href="./checkout.html?id=${item.id}" class="btn btn-primary">Add to cart</a>
              </div>
            </select>
          </div>
        </div>
      </div>
    `;
  });
}

renderCartItems();

let cart = [];


function addToCart(id) {
  const productToAdd = products.find(product => product.id === id);
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const existingItem = cartItems.find(item => item.id === id);
  if (existingItem) {
    console.log('Jacket already in cart!');
    return;
  }

  cartItems.push(productToAdd);
  localStorage.setItem('cart', JSON.stringify(cartItems));

  console.log('Jacket added to cart successfully!');
}



