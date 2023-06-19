
}




      window.addEventListener('DOMContentLoaded', function() {
          var form = document.getElementById('checkout-form');
          var cartContainer = document.getElementById('cart-container');
          var totalContainer = document.getElementById('total-container');
          var cart = [];
          var total = 0;

          form.addEventListener('submit', function(event) {
              event.preventDefault();
              var productInput = document.getElementById('product-input');
              var priceInput = document.getElementById('price-input');

              var product = productInput.value;
              var price = parseFloat(priceInput.value);

              if (product && price) {
                  cart.push({ product: product, price: price });
                  total += price;

                  // Display the added product in the cart
                  var cartItem = document.createElement('div');
                  cartItem.classList.add('cart-item');
                  cartItem.innerHTML = '<span class="product-name">' + product + '</span><span class="product-price">R' + price.toFixed(2) + '</span>';
                  cartContainer.appendChild(cartItem);

                  // Update the total
                  totalContainer.textContent = 'R' + total.toFixed(2);

                  // Reset the input fields
                  productInput.value = '';
                  priceInput.value = '';
              }
          });
      });


  