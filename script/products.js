let products = JSON.parse(localStorage.getItem('jackets')) ?
JSON.parse(localStorage.getItem('jackets')) : 
 localStorage.setItem('jackets', JSON.stringify(
    {
      id: '1',
      image: 'https://i.postimg.cc/DZg7PCkC/barbie-girls-barbie-fleece.jpg',
      name: 'Babie girls fleece',
      price: 'R250'
    },
    {
      id: '2',
      image:'',
      name: 'Denim jacket',
      price: 'R200'
    },
    {
      id: '3',
      image: '../images/Kiddies-J (girls)/kids_micky_demin-removebg-preview.png',
      name: 'Micky denim',
      price: 'R250'
    },
    {
      id: '4',
      image: '../images/Kiddies-J (girls)/Puffer-Jacket-removebg-preview (1).png',
      name: 'Puffer jacket',
      price: 'R220'
    },
    {
      id: '5',
      image: 'https://i.postimg.cc/NFNPJYcL/teddy-jacket-removebg-preview.png',
      name: 'Teddy jacket',
      price: 'R250'
    },
    {
      id: '6',
      image: '',
      name: '',
      price: 'R250'
    },
    {
      id: '7',
      image: 'https://i.postimg.cc/xTM04FZg/kids-Biker-Jacket-removebg-preview-8.png',
      name: 'Denim jacket',
      price: 'R200'
    },
    {
      id: '8',
      image: '../images/Kiddies-J (girls)/kids_micky_demin-removebg-preview.png',
      name: 'Micky denim',
      price: 'R250'
    },
    {
      id: '9',
      image: '../images/Kiddies-J (girls)/Puffer-Jacket-removebg-preview (1).png',
      name: 'Puffer jacket',
      price: 'R220'
    },
    {
      id: '10',
      image: 'https://i.postimg.cc/NFNPJYcL/teddy-jacket-removebg-preview.png',
      name: 'Teddy jacket',
      price: 'R250'
    }
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
            <select class="iphone">
              <option>select color</option>
              <option value="color">black</option>
              <option value="color">white</option>
              <option value="color">Gold</option>
              <option value="color">pink</option>
            </select>
            <a href="./checkout..js" class="btn btn-primary">Add to cart</a>
          </div>
        </div>
      </div>
    `;
  });
}catch(e) {
  location.reload()
}
    `;
  });
} catch(e) {
  location.reload();
}

