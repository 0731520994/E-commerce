/*

// Get the buttons by their IDs
const backButton1 = document.getElementById('backButton1');
const nextButton1 = document.getElementById('nextButton1');
const backButton2 = document.getElementById('backButton2');
const nextButton2 = document.getElementById('nextButton2');

// Add event listeners to the buttons
backButton1.addEventListener('click', showCartSection);
nextButton1.addEventListener('click', showPaymentSection);
backButton2.addEventListener('click', showCartSection);
nextButton2.addEventListener('click', submitForm);

// Function to show the payment section and hide the billing address section
function showPaymentSection() {
  const billingSection = document.getElementById('page1');
  const paymentSection = document.getElementById('page2');
  
  billingSection.style.display = 'none';
  paymentSection.style.display = 'block';
}

// Function to show the billing address section and hide the payment section
function showCartSection() {
  const billingSection = document.getElementById('page1');
  const paymentSection = document.getElementById('page2');
  
  billingSection.style.display = 'block';
  paymentSection.style.display = 'none';
}

// Function to submit the form
function submitForm() {
  document.querySelector('form').submit();
}

// Function to calculate the total
function calculateTotal() {
  // Perform the calculation logic
  // ...
}


<!DOCTYPE html>
<html>
<head>
    <title>Checkout Page</title>
    <style>
        /* CSS styles for responsiveness and layout */
        @media (max-width: 600px) {
          /* Styles for smaller screens */
      }

      @media (min-width: 601px) and (max-width: 1024px) {
          /* Styles for medium-sized screens */
      }

      @media (min-width: 1025px) {
          /* Styles for larger screens */
      }
  </style>
  <script>
      // JavaScript code for handling form submission, cart functionality, and calculations

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
                  cartItem.innerHTML = '<span class="product-name">' + product + '</span><span class="product-price">$' + price.toFixed(2) + '</span>';
                  cartContainer.appendChild(cartItem);

                  // Update the total
                  totalContainer.textContent = '$' + total.toFixed(2);

                  // Reset the input fields
                  productInput.value = '';
                  priceInput.value = '';
              }
          });
      });


  