


let products = JSON.parse(localStorage.getItem('jackets')) ?
JSON.parse(localStorage.getItem('jackets')) : 
 localStorage.setItem('jackets', JSON.stringify(
  [ 

    {
      id: '1',
      image: 'https://i.postimg.cc/cJPFQT69/barbie-girls-barbie-fleece-removebg-preview-2-4.png',
      name: '💓Babie jacket',
      price: 'R250'
    },
    {
      id: '2',
      image: 'https://i.postimg.cc/QtdhL8jK/kids-Biker-Jacket-removebg-preview-8-edited.jpg',
      name: '💓Biker jacket',
      price: 'R250'
    },
    {
      id: '3',
      image: 'https://i.postimg.cc/3N2LnGzX/kids-micky-demin-1.jpg',
      name: '💓Mickey Denim',
      price: 'R230'
    },
    {
      id: '4',
      image: 'https://i.postimg.cc/V6Gnqk7Y/Puffer-Jacket-3.jpg',
      name: '💓Puffer jacket',
      price: 'R220'
    },
    {
      id: '5',
      image: 'https://i.postimg.cc/L4L72qsd/Black-denim.jpg',
      name: '💓Black Denim',
      price: 'R250'
    },
    {
        id: '6',
        image: 'https://i.postimg.cc/FzqRpQ9M/teddy-jacket.jpg',
        name: '💓Teddy jacket',
        price: 'R250'
      },
    {
        id: '7',
        image: 'https://i.postimg.cc/brK5TCK6/Borg-collar-flap-Detail-coat.jpg',
        name: '💙Borg Collar Flap Detail coat',
        price: 'R350'
      },
    {
        id: '8',
        image: 'https://i.postimg.cc/tTPnJDh3/Superman-quilted-jacket.jpg',
        name: '💙Superman quilted jacket',
        price: 'R250'
      },
    {
        id: '9',
        image: 'https://i.postimg.cc/Gm2BGbFh/Mickey-Mouse-Bomber.jpg',
        name: '💙Mickey Mouse Bomber jacket',
        price: 'R350'
      },
    {
        id: '10',
        image: 'https://i.postimg.cc/gj2wspCD/Bomber-jacket.jpg',
        name: '💙Bomber Jacket',
        price: 'R250'
      },
    {
        id: '11',
        image: 'https://i.postimg.cc/C5chxf6C/Axel-Arigato-Illusion-varsity-jacket.jpg',
        name: '💙Allex Arigato Illuson Varsity Jacket',
        price: 'R250'
      },
    {
        id: '12',
        image: 'https://i.postimg.cc/FH3GXrJH/little-boys-Denin-jacket.jpg',
        name: '💙Denim jacket',
        price: 'R200'
      },
  ]
 ))


    
  let productsContainer = document.querySelector('.jackets-item');
  try{
  products.forEach(item => {
    productsContainer.innerHTML += `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${item.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.price}</p>
            <select class="jacket">
              <option>select size </option>
              <option value="size">2-3yrs</option>
              <option value="size">3-4yrs</option>
              <option value="size">4-5yrs</option>
              <option value="size">5-6yrs</option>
              <option value="size">7-8yrs</option>
              <option value="size">S</option>
              <option value="size">M</option>
              <option value="size">L</option>
            </select>
            <a href="./checkout.html?id=${item.id}" class="btn btn-primary">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}catch(e) {
  location.reload()
}
