/*
let jackets = JSON.parse(localStorage.getItem('jackets'))


//fuction display

function displayData() {
  

  if(localStorage.getItem('jackets') == null) {
    jackets = [];
  }else {
    jackets = JSON.parse(localStorage.getItem('jackets'))
  }

  console.log(jackets);

  tableData.innerHTML = '<tr></tr>';


  tableData.innerHTML = '';
  jackets.forEach((item) => {
    tableData.innerHTML += `
    <tr>
    <td><src="${item.image}" alt="${item.name}""></td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>
      <button class="edit-button" >Edit</button>
      <button class="delete-button">Delete</button>
    </td>
    </tr>
    `
  })
}

document.onload = displayData();

//fuction add




function addItem() {
let name = document.querySelector('#name').value;
let price = document.querySelector('#price').value;
let image = document.querySelector('#image').value;


if(localStorage.getItem('jackets') == null) {
  jackets = [];
}else {
  jackets = JSON.parse(localStorage.getItem('jackets'))
}

console.log(jackets);

jackets.push({
  name: name,
  price: price,
  image: image
})

localStorage.setItem('jackets', JSON.stringify(jackets));
displayData();


name = document.querySelector('#name').value = '';
price = document.querySelector('#price').value = '';
image = document.querySelector('#image').value = '';
}





//function sort



function sortItem() {

  let name = document.querySelector('#name').value = '';
  let price = document.querySelector('#price').value = '';
  let image = document.querySelector('#image').value = '';

  jackets.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }

  });
  displayData();
}
renderItems();


//function delete


function deleteItem(index) {
  jackets.splice(index, 1);

jackets.map((item, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = item;

deleteButton.addEventListener('click', () => deleteItem(index));


  }
  
  function renderItems() {
  const itemsContainer = document.getElementById('tabledata');
  itemsContainer.innerHTML = '';
  
  displayData()
  
  renderItems();
  
  });
  }
  




  function Jacket(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
    }
    

    //function edit
    
    function editJacket() {
      const jacket = jackets[index];.
    
   
    document.getElementById("nameInput").value = jacket.name;
    document.getElementById("priceInput").value = jacket.price;
    document.getElementById("imageInput").value = jacket.image;
    
    editButton.addEventListener('click', () => editJacket(index));

    }
    

    //function delete 

    function deleteItem(index) {
      jackets.splice(index, 1);
      displayData();
    }
    const itemsContainer = document.getElementById('tableData');
      jacketContainer.innerHTML = '';
    
      jackets.forEach((item, index) => {
        const row = document.createElement('tr');
    
    
      });
    
    
    renderItems();
    
   
    
    function deleteItem(index) {
      jackets.splice(index, 1);
      renderItems();
      }
      
      function renderItems() {
      const itemsContainer = document.getElementById('jackets-container');
      itemsContainer.innerHTML = '';
      
      jackets.map((item, index) => {
      const listItem = document.createElement('li');
      
      deleteButton.addEventListener('click', () => deleteItem(index));
      })
*/















   


    /*

let tableData = document.getElementById('#tableData');

products.forEach(item => {
  dataRow.innerHTML += `
    <tr>
      <td> <img class="img-fluid" loading="lazy" src='${item.image}' alt='${item.name}'></td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
      </td>
    </tr>
  `;
});

const addBtn = document.querySelector('#add-btn');
const sortBtn = document.querySelector('#sort-btn');


*/

let jackets = JSON.parse(localStorage.getItem('jackets'));


// Display function 

function displayData() {
  let tableData = document.getElementById('tableData');

  if (localStorage.getItem('jackets') == null) {
    jackets = [];
  } else {
    jackets = JSON.parse(localStorage.getItem('jackets'));
  }

  console.log(jackets);

  tableData.innerHTML = '<tr></tr>';

  tableData.innerHTML = '';
  jackets.forEach((item) => {
    tableData.innerHTML += `
    <tr>
    <td><img src="${item.image}" alt="${item.name}"></td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>
      <button class="edit-button" >Edit</button>
      <button class="delete-button">Delete</button>
    </td>
    </tr>
    `;
  });
}

window.onload = displayData();

//edit

for (let index = 0; index < jackets.length; index++) {
  const editButton = document.getElementById(`editButton${index}`);
  editButton.addEventListener('click', () => editJacket(index));
}







//add function

function addItem() {
  let name = document.querySelector('#name').value;
  let price = document.querySelector('#price').value;
  let image = document.querySelector('#image').value;

  if (localStorage.getItem('jackets') == null) {
    jackets = [];
  } else {
    jackets = JSON.parse(localStorage.getItem('jackets'));
  }

  console.log(jackets);

  jackets.push({
    name: name,
    price: price,
    image: image
  });

  localStorage.setItem('jackets', JSON.stringify(jackets));
  displayData();

  document.querySelector('#name').value = '';
  document.querySelector('#price').value = '';
  document.querySelector('#image').value = '';
}


//sort

function sortItem() {
  let name = document.querySelector('#name').value = '';
  let price = document.querySelector('#price').value = '';
  let image = document.querySelector('#image').value = '';

  jackets.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });

  display











  
let jackets = [
  {
    id: '1',
    image: '',
    name: '',
    price: 'R250'
  },
  {
    id: '2',
    image: 'https://i.postimg.cc/xTM04FZg/kids-Biker-Jacket-removebg-preview-8.png',
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
  }
];





localStorage.setItem('jackets', JSON.stringify(jackets));

function displayData() {
  let jackets

  if(localStorage.getItem('jackets') == null) {
    jackets = [];
  }else {
    jackets = JSON.parse(localStorage.getItem('jackets'))
  }

  console.log(jackets);

  let tableData = document.querySelector('#tableData');

  tableData.innerHTML = '';
  jackets.forEach((item) => {
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
let name = document.querySelector('#name').value;
let price = document.querySelector('#price').value;
let image = document.querySelector('#image').value;
// console.log('reached');
let jackets

if(localStorage.getItem('jackets') == null) {
  jackets = [];
}else {
  jackets = JSON.parse(localStorage.getItem('jackets'))
}

console.log(jackets);

jackets.push({
  name: name,
  price: price,
  image: image
})

localStorage.setItem('jackets', JSON.stringify(jackets));
displayData();

name = document.querySelector('#name').value = '';
price = document.querySelector('#price').value = '';
image = document.querySelector('#image').value = '';
}



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



//sort


function sortItem() {
  let name = document.querySelector('#name').value = '';
  let price = document.querySelector('#price').value = '';
  let image = document.querySelector('#image').value = '';

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