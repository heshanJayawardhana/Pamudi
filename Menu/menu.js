const drinksMenu = {
  "Fresh Juice": [
    { name: "Orange Juice", price: 1500 },
    { name: "Passion Fruit Juice", price: 890 },
    { name: "Mixed Fruit Juice", price: 825 },
    { name: "Mango Juice", price: 875 },
    { name: "Pineapple Juice", price: 875 },
    { name: "Melon Juice", price: 875 },
    { name: "Lime Soda", price: 875 },
    { name: "Lime and Mint", price: 850 },
    { name: "Home Made Ginger Beer", price: 850 },
    { name: "Lime Juice", price: 790 },
  ],
  "Soft Drinks": [
    { name: "Coca Cola", price: 550 },
    { name: "Sprite", price: 550 },
    { name: "Portello", price: 550 },
    { name: "Coke Zero", price: 625 },
    { name: "Sprite Zero", price: 625 },
    { name: "Soda", price: 550 },
    { name: "Fanta", price: 550 },
    { name: "Cinnamon Iced Tea", price: 950 },
    { name: "Lemon Iced Tea", price: 950 },
    { name: "Iced Milo", price: 1100 },
  ]
};

const soupSambola = {
  "Sambola": [
    { 
      "name": "Gotukola Sambolaya", 
      "price": 835, 
      "description": "Chopped Gotu Kola, Coconut, Onion, Tomato, Green Chilli, Lime."
    },
    { 
      "name": "Karawila Sambolaya", 
      "price": 775, 
      "description": "Bitter Gourd, Onion, Tomato, Green Chilli, Lime, Capsicum."
    },
    { 
      "name": "Carrot Sambolaya", 
      "price": 775, 
      "description": "Grated Carrot, Coconut, Onion, Green Chilli, Lime."
    },
    { 
      "name": "Mixed Salad", 
      "price": 775, 
      "description": "Mixture of Cucumber, Tomato, Carrot, Onion, Green Chilli, Lime."
    },
    { 
      "name": "Seeni Sambol", 
      "price": 690, 
      "description": "Caramelized Onion, Chilli Flakes, Tamarind Paste."
    },
    { 
      "name": "Pol Sambol", 
      "price": 625, 
      "description": "Grated Coconut, Dry Chilli, Onion, Tomato, Green Chilli, Lime."
    },
    { 
      "name": "Papadam", 
      "price": 375, 
      "description": "Crispy fried lentil wafers."
    }
  ],
  "Soup": [
    { 
      "name": "Vegetable Soup", 
      "price": 850, 
      "description": "Farm fresh vegetable soup with a pinch of salt for your liking."
    },
    { 
      "name": "Sweet Corn Chicken Soup", 
      "price": 1050, 
      "description": "Sweet corn kernels in a flavourful chicken soup with egg drop."
    },
    { 
      "name": "Roasted Fish Soup", 
      "price": 1050, 
      "description": "Roasted fish soup along with roasted cumin seeds and red onions."
    },
    { 
      "name": "Mullaguthanni Soup", 
      "price": 850, 
      "description": "Coconut milk-based soup made with a combination of accompaniments to create an authentic Sri Lankan curry flavor."
    }
  ]
};

const chickenMutton = {
  "Mutton": [
    { 
      "name": "Elu Mas Masala", 
      "price": 2990, 
      "description": "Mutton cooked in Masala herbs (Indian Spices) with Coriander and lime."
    },
    { 
      "name": "Elu Mas Yapanaya Kramayata (Jaffna Style)", 
      "price": 2990, 
      "description": "Mutton marinated and slow cooked using a recipe unique to the northern Province."
    },
    { 
      "name": "Elu Mas Stew", 
      "price": 3250, 
      "description": "Mutton cooked in Mustard flavoured sauce with a hint of Ceylon Spices & Farm Fresh Vegetables."
    },
    { 
      "name": "Elu Mas Devilled (Boneless)", 
      "price": 3250, 
      "description": "Boneless Mutton Sauteed in Chef's special mixture of Sauces."
    },
    { 
      "name": "Elu Mas Themparadu (Boneless)", 
      "price": 2990, 
      "description": "Marinated Mutton Sauteed to perfection with onions & capsicum."
    }
  ],
  "Chicken": [
    { 
      "name": "Kukulmas Yapanaya Kramayata (Jaffna Style)", 
      "price": 1650, 
      "description": "Chicken marinated and slow cooked using a recipe unique to the Northern province of Sri Lanka."
    },
    { 
      "name": "Kukulmas Kaluwaata Uyala", 
      "price": 1650, 
      "description": "Corn fava bean mustard tigernut jicama green bean celtuce collard greens Pea horseradish azuki."
    },
    { 
      "name": "Kukulmas Themparadu", 
      "price": 1850, 
      "description": "Marinated Fried Chicken sauteed with onions and capsicum."
    },
    { 
      "name": "Meat Balls Kirata / Devilled", 
      "price": 1550, 
      "description": "A favorite in the local household. Chicken meatballs cooked in coconut-based brown curry."
    }
  ]
};

const SeaFoods = {
  "Fish": [
    { 
      "name": "Maalu Mirisata", 
      "price": 1995, 
      "description": "Spicy Fish curry cooked with Fresh Spices from the Heart of Ceylon."
    },
    { 
      "name": "Maalu Ambuthiyal", 
      "price": 1995, 
      "description": "A unique Sri Lankan fish recipe marinated in tangy and peppery sauce."
    },
    { 
      "name": "Maalu Themparadu Karala", 
      "price": 1995, 
      "description": "Marinated Fried Fish sauteed with onions and capsicum."
    },
    { 
      "name": "Maalu Suduwata", 
      "price": 2250, 
      "description": "A lighter version of the Miris Maalu. Cooked with coconut milk, turmeric, and mustard cream."
    },
    { 
      "name": "Maalu Devilled", 
      "price": 1995, 
      "description": "Fried Fish sauteed with the Chef's special mixture of sauces."
    },
    { 
      "name": "Maalu Stew", 
      "price": 2150, 
      "description": "Fish cooked in Mustard flavoured sauce with a hint of Ceylon Spices & Farm Fresh Vegetables."
    }
  ],
  "Cuttlefish": [
    { 
      "name": "Dallo Rathata, Sarata", 
      "price": 1875, 
      "description": "Fresh Cuttlefish cooked in a spice blended red curry sauce."
    },
    { 
      "name": "Dallo Devilled", 
      "price": 1850, 
      "description": "Fried Cuttlefish sauteed with the Chef's special mixture of sauces."
    },
    { 
      "name": "Hot Butter Cuttlefish", 
      "price": 1990, 
      "description": "Batter fried Cuttlefish mixed with a special blend of spices."
    }
  ]
};

const seafood = {
  "Prawns": [
    {
      "name": "Isso Yapanaya Kramayata (Jaffna Style)",
      "price": 1975,
      "description": "Freshly caught Prawns cooked using authentic Jaffna spices."
    },
    {
      "name": "Isso Themperadu",
      "price": 2250,
      "description": "Fried Prawns sautéed with Onions and Capsicum."
    },
    {
      "name": "Isso Stew",
      "price": 2250,
      "description": "Freshly caught Prawns cooked in Mustard flavoured sauce with a hint of Ceylon spices and vegetables."
    },
    {
      "name": "Isso Devilled",
      "price": 2200,
      "description": "Fried Prawn sautéed with Chef's special mixture of sauces and Ceylon spices."
    },
    {
      "name": "Hot Butter Isso",
      "price": 2450,
      "description": "Batter Fried Prawn mixed with a special blend of spices."
    }
  ],
  "Crab": [
    {
      "name": "Kakuluwo Negombo Kramayata",
      "price": 2250,
      "description": "Freshly caught Crab marinated and slow cooked according to a unique recipe of an authentic household in Negombo."
    },
    {
      "name": "Lankan Chilli Kakuluwo",
      "price": 1995,
      "description": "A local rendition of the world famous Singapore chilli crab."
    },
    {
      "name": "Crab Tempered Dry Curry",
      "price": 1950,
      "description": "Marinated Crab sautéed with Onions & Capsicum."
    }
  ]
};

const vegetablesMenu = {
  "Vegetables": [
    {
      "name": "Soya Curry / Devilled",
      "price": 720,
      "description": ""
    },
    {
      "name": "Stuffed Capsicum (1 nos)",
      "price": 650,
      "description": ""
    },
    {
      "name": "Beetroot Curry",
      "price": 850,
      "description": ""
    },
    {
      "name": "Pumpkin Curry",
      "price": 950,
      "description": ""
    },
    {
      "name": "Tempered Potato / Curry",
      "price": 850,
      "description": ""
    },
    {
      "name": "Mango Curry",
      "price": 925,
      "description": ""
    },
    {
      "name": "Beans Curry",
      "price": 850,
      "description": ""
    },
    {
      "name": "Dhal Curry",
      "price": 780,
      "description": ""
    },
    {
      "name": "Garlic Curry",
      "price": 950,
      "description": ""
    },
    {
      "name": "Tempered Pineapple",
      "price": 950,
      "description": ""
    },
    {
      "name": "Polos Curry",
      "price": 1100,
      "description": ""
    },
    {
      "name": "Kaju Maluwa",
      "price": 1750,
      "description": ""
    },
    {
      "name": "Batu Mojuwa",
      "price": 825,
      "description": ""
    }
  ]
};

const desserts = {
  "Desserts": [
    {
      "name": "Ice Cream",
      "price": 975,
      "description": "Vanilla/Chocolate/Strawberry"
    },
    {
      "name": "Fruit Salad",
      "price": 975,
      "description": ""
    },
    {
      "name": "Fruit Salad with Ice Cream",
      "price": 1350,
      "description": ""
    },
    {
      "name": "Watalappam",
      "price": 925,
      "description": ""
    },
    {
      "name": "Curd and Treacle",
      "price": 975,
      "description": ""
    },
    {
      "name": "Fruit Platter",
      "price": 1550,
      "description": ""
    },
    {
      "name": "Honey Hopper",
      "price": 650,
      "description": ""
    },
    {
      "name": "Hopper Mousse",
      "price": 950,
      "description": "3 scoops of mousse served on a delicious Pani Appa."
    },
    {
      "name": "Biscuit Pudding",
      "price": 975,
      "description": ""
    },
    {
      "name": "Sundae Fantasy",
      "price": 1550,
      "description": "3 Scoops of ice cream topped with strawberry compote, mango syrup & chocolate chip."
    },
    {
      "name": "Kithul Curd Cake",
      "price": 1550,
      "description": "So Curd cake on a ginger biscuit base, topped with Pani Kaju & Kithul Treacle."
    }
  ]
};

const kottu = {
  "Kottu": [
    {
      "name": "Vegetable Kottu",
      "price": 1400,
      "description": ""
    },
    {
      "name": "Fish Kottu",
      "price": 1850,
      "description": ""
    },
    {
      "name": "Chicken Kottu",
      "price": 1850,
      "description": ""
    },
    {
      "name": "Mutton Kottu",
      "price": 2750,
      "description": ""
    },
    {
      "name": "Cheesy Nai Miris",
      "price": 2250,
      "description": ""
    },
    {
      "name": "Culture Special Chicken Kottu",
      "price": 2760,
      "description": "Kottu Rotti softened and soaked in a thick curry, topped with 2 types of cheese sauce to bring the cheesiest Kottu in town."
    },
    {
      "name": "Extra Cheese",
      "price": 580,
      "description": ""
    }
  ]
};


function showMenu(container_id, topic_class, data_list) {

  let container = document.getElementById(container_id);

  for (const content in data_list) {
    const column = document.createElement('div');
    column.className = 'column';

    const topic = document.createElement('h3');
    topic.className = topic_class;
    topic.textContent = content;
    column.appendChild(topic);

    const frame = document.createElement('div');
    frame.className = 'frame';

    data_list[content].forEach(meal => {
      let menuItem = document.createElement('div');
      menuItem.className = 'block';

      let menuHead = document.createElement('div');
      menuHead.className = 'row';

      let mealName = document.createElement('p');
      mealName.textContent = meal.name;
      menuHead.appendChild(mealName);

      let mealPrice = document.createElement('p');
      mealPrice.textContent = meal.price;
      menuHead.appendChild(mealPrice);

      menuItem.appendChild(menuHead);

      if (meal.description) {
        let mealDesc = document.createElement('p');
        mealDesc.textContent = meal.description;
        mealDesc.className = 'desc';
        menuItem.appendChild(mealDesc);
      }

      frame.appendChild(menuItem);
    });

    column.appendChild(frame);
    container.appendChild(column); // Append the column to the container
  }
}

// Usage Example
showMenu('drinksMenu', 'drinks', drinksMenu);

showMenu('classy', 'classy', soupSambola);

showMenu('meats', 'meat', chickenMutton);

showMenu('fish', 'fishes', SeaFoods);

showMenu('seafoods', 'seafood', seafood);

showMenu('veg', 'vegetables', vegetablesMenu);

showMenu('desert', 'dest', desserts);

showMenu('koTTu', 'kottU', kottu);