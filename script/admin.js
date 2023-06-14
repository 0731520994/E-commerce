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
