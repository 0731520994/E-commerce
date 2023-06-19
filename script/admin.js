let jackets = [
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
        image: '',
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
        image: '',
        name: '💙Denim jacket',
        price: 'R200'
      },
  ];
  
  localStorage.setItem('jackets', JSON.stringify(jackets));
  
  function displayData() {
    let storedJackets = localStorage.getItem('jackets');
    let jackets;
  
    if (storedJackets === null) {
      jackets = [];
    } else {
      jackets = JSON.parse(storedJackets);
    }
  
    console.log(jackets);
  
    let tableData = document.querySelector('#tableData');
  
    tableData.innerHTML = '';
    jackets.forEach((item, index) => {
      tableData.innerHTML += `
      <tr>
      <td><img src="${item.image}"></td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td><button>delete</button><button>Edit</button></td>
      </tr>
      `
    })
  }
  
  document.onload = displayData();
  
  //add
  function addItem() {
    let image = document.querySelector('#image').value;
    let name = document.querySelector('#name').value;
    let price = document.querySelector('#price').value;
  
    let jackets;
  
    if (localStorage.getItem('jackets') == null) {
      jackets = [];
    } else {
      jackets = JSON.parse(localStorage.getItem('jackets'));
    }
  
    jackets.push({
      image: image, // Include the image value
      name: name,
      price: price,
    });
  
    localStorage.setItem('jackets', JSON.stringify(jackets));
    displayData();
  
    name = document.querySelector('#name').value = '';
    price = document.querySelector('#price').value = '';
    image = document.querySelector('#image').value = '';
  }
  
  /*
  
  function sortItem() {
    let name = document.querySelector('#name').value = '';
    price = document.querySelector('#price').value = '';
    image = document.querySelector('#image').value = '';
  }
  
  
  if(localStorage.getItem('jacket')== null) {
    jacket =[]
  }else {
    jacket = JSON.parse(localStorage.getItem('jacket'))
  }
  
  */
  
  //sort
  
  
  function sortItem() {
    const name = document.querySelector('#name').value = '';
    const price = document.querySelector('#price').value = '';
    const image = document.querySelector('#image').value = '';
  
    jackets.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  
    localStorage.setItem('jackets', JSON.stringify(jackets)); // Update local storage
  
    displayData();
  }
  
  
  //edit 
  
  
  function displayData() {
    let jackets;
  
    if (localStorage.getItem('jackets') == null) {
      jackets = [];
    } else {
      jackets = JSON.parse(localStorage.getItem('jackets'));
    }
  
    console.log(jackets);
  
    let tableData = document.querySelector('#tableData');
  
    tableData.innerHTML = '';
    jackets.forEach((item, index) => {
      tableData.innerHTML += `
      <tr>
        <td><img src="${item.image}"></td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>
          <button class="delete-button" onclick="deleteItem(${index})">Delete</button>
          <button class="edit-button" onclick="editItem(${index})">Edit</button>
        </td>
      </tr>
      `;
    });
  }
  
  function editItem(index) {
    const jacket = jackets[index];
  
    const nameInput = prompt('Enter the new name:', jacket.name);
    const priceInput = prompt('Enter the new price:', jacket.price);
    const imageInput = prompt('Enter the new image URL:', jacket.image);
  
    // Update the jacket object in the array if inputs are not empty
    if (nameInput !== null && nameInput !== '') {
      jacket.name = nameInput;
    }
    if (priceInput !== null && priceInput !== '') {
      jacket.price = priceInput;
    }
    if (imageInput !== null && imageInput !== '') {
      jacket.image = imageInput;
    }
  
    localStorage.setItem('jackets', JSON.stringify(jackets));
    displayData();
  }
  
  
  //delete
  
  
  function deleteItem(index) {
    jackets.splice(index, 1);
    localStorage.setItem('jackets', JSON.stringify(jackets));
    displayData();
  }
  
    
