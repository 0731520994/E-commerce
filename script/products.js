let categories = [
    {
      title: "Princesses",
      products: [
        {
          id: '1',
          image: '../images/Kiddies-J (girls)/kids_Biker_Jacket-removebg-preview (8).png',
          name: 'Biker jacket',
          price: 'R250'
        },
        {
          id: '2',
          image: '../images/Kiddies-J (girls)/Kids_Demin_jacket-removebg-preview.png',
          name: 'Denim jacket',
          price: 'R200'
        },
        {
          id: '3',
          image: '../images/Kiddies-J (girls)/kids_micky_demin-removebg-preview.png',
          name: 'Micky denim',
          price: 'R250'
        }
      ]
    },
    {
      title: "Prince's",
      products: [
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
      ]
    },
    {
      title: "Teen-girls",
      products: [
        {
          id: '11',
          image: '../images/teens-J (girls)/fur_coats-removebg-preview.png',
          name: 'Fur coats',
          price: 'R600'
        },
        {
          id: '12',
          image: '../images/teens-J (girls)/g-star_cropped_jacket-removebg-preview.png',
          name: 'G-star cropped jacket',
          price: 'R350'
        },
        {
          id: '13',
          image: '../images/teens-J (girls)/leather_jacket_1-removebg-preview.png',
          name: 'leather jacket',
          price: 'R500'
        },
        {
          id: '14',
          image: '../images/teens-J (girls)/teens_denim-removebg-preview.png',
          name: 'Teens denim',
          price: 'R300'
        },
        {
          id: '15',
          image: '../images/teens-J (girls)/teens_Stone_faux_fur_lined_bicker_jacket-removebg-preview.png',
          name: 'Stone faux fur lined biker jacket',
          price: 'R450'
        }
      ]
    },
    {
      title: "Teen-boys",
      products: [
        {
          id: '16',
          image: '../images/tenns-J (boys)/Axel_Arigato-Illusion_varsity_jacket-removebg-preview.png',
          name: 'Alex Arigato illussion Varsity jacket',
          price: 'R600'
        },
        {
          id: '17',
          image: '../images/tenns-J (boys)/men_corduroy_demin-removebg-preview.png',
          name: 'Corduroy denim jacket',
          price: 'R1500'
        },
        {
          id: '18',
          image: '../images/tenns-J (boys)/Rain_jacket-removebg-preview.png',
          name: 'Rain jacket',
          price: 'R800'
        },
        {
          id: '19',
          image: '../images/tenns-J (boys)/Simms_CX_Jacket-removebg-preview.png',
          name: 'Simms CX jacket',
          price: 'R1100'
        },
        {
          id: '20',
          image: '../images/tenns-J (boys)/Utility_puffer_jacket-removebg-preview (1).png',
          name: 'Puffer Jacket',
          price: 'R800'
        }
      ]
    },
    {
      title: "Ladies",
      products: [
        {
          id: '21',
          image: '../images/ladies-J/fur_coats_1-removebg-preview.png',
          name: 'Fur coat',
          price: 'R600'
        },
        {
          id: '22',
          image: '../images/ladies-J/ladies_oversized_rag_demin-removebg-preview.png',
          name: 'Oversized denim',
          price: 'R550'
        },
        {
          id: '23',
          image: '../images/ladies-J/leather_jacket-removebg-preview.png',
          name: '',
          price: 'R450'
        },
        {
          id: '24',
          image: '../images/ladies-J/mens_leather_jackets-removebg-preview.png',
          name: 'Nuetral leather jacket',
          price: 'R450'
        },
        {
          id: '25',
          image: '../images/ladies-J/shearling_and_leather_jacket-removebg-preview.png',
          name: 'ladies Leather jacket',
          price: 'R600'
        }
      ]
    },
    {
      title: "Gentlemen",
      products: [
        {
          id: '26',
          image: '../images/Gentlemen-J/men_s_coat-removebg-preview.png',
          name: 'Coat',
          price: 'R2000'
        },
        {
          id: '27',
          image: '../images/Gentlemen-J/Mens_fleece_lined_jacket-removebg-preview.png',
          name: 'Fleece lined jacket',
          price: 'R800'
        },
        {
          id: '28',
          image: '../images/Gentlemen-J/mens_lightweight_puffer-removebg-preview.png',
          name: 'Lightweight puffer',
          price: 'R1000'
        },
        {
          id: '29',
          image: '../images/Gentlemen-J/mens_winter_leather-removebg-preview.png',
          name: 'Winter Leather',
          price: 'R8000'
        },
        {
          id: '30',
          image: '../images/Gentlemen-J/Notch_collar_coat-removebg-preview.png',
          name: 'Notch Collar coat',
          price: 'R1500'
        }
      ]
    }
  ];
  

  let princessContainer = document.querySelector('princess-item');
  let princeContainer = document.querySelector('prince-item');
  let teengirlsContainer = document.querySelector('teengirls-item');
  let teenboyContainer = document.querySelector('teenboy-item');
  let ladyContainer = document.querySelector('lady-item');
  let gentlemanContainer = document.querySelector('gentleman-item');
  
  categories.forEach(category => {
    let categoryContainer = document.createElement('div');
    categoryContainer.classList.add('row', 'row-cols-1', 'row-cols-md-3', 'g-4');
    
    let categoryHeading = document.createElement('h1');
    categoryHeading.textContent = category.title;
    
    categoryContainer.appendChild(categoryHeading);
    
    category.products.forEach(product => {
      let card = document.createElement('div');
      card.classList.add('col');
      card.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${product.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
            <select class="iphone">
              <option>select color</option>
              <option value="color">Black</option>
              <option value="color">White</option>
              <option value="color">Blue</option>
              <option value="color">pink</option>
            </select>
          </div>
        </div>
      `;
      
      categoryContainer.appendChild(card);
    });
  
    if (category.title === "Princesses") {
      princessContainer.appendChild(categoryContainer);
    } else if (category.title === "Prince's") {
      princeContainer.appendChild(categoryContainer);
    } else if (category.title === "Teen-girls") {
      teengirlsContainer.appendChild(categoryContainer);
    } else if (category.title === "Teen-boys") {
      teenboyContainer.appendChild(categoryContainer);
    } else if (category.title === "Ladies") {
      ladyContainer.appendChild(categoryContainer);
    } else if (category.title === "Gentlemen") {
      gentlemanContainer.appendChild(categoryContainer);
    }
  });
  
  
  