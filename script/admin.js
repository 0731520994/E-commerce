
let table = document.querySelector('.table1');

let table1 = [
  {
    id: '1',
    image: '',
    name: 'Biker jacket',
    price: 'R250'
  },
  {
    id: '2',
    image: '../images/Kiddies-J (girls)/kids_Biker_Jacket-removebg-preview (8).png',
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
    image: '../images/Kiddies-J (girls)/teddy_jacket-removebg-preview.png',
    name: 'Teddy jacket',
    price: 'R250'
  }
];

table1.forEach(item => {
  table.innerHTML += `
    <tr>
      <td>${item.image}</td>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td><button>Adit</button></td>
      <td><button>Delete</button></td>
    </tr>
  `;
});



