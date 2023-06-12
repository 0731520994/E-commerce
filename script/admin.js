let table=document.querySelector('.table1')

let table1 = [
    {
        id: '1',
        name:'Iphone',
        price:'R23000',
        Image:'../images/iphone13.webp',
    },
    {
        name:'Airpods',
        price:'R700',
        Image:'../images/airpods.jpeg',
            },
    {
        name:'Charger',
        price:'R500',
        Image:'../images/iphone13.webp',
            }
]

table1.forEach(item =>{
    table.innerHTML+=`
    <tr>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td><img src=${item.Image}></td>
    <td><button>Add</button></td>
    <td><button>Delete</button></td>
    </tr>
    `  
})

document.querySelector ('#addBtn')
