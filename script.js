
const foods = [
  {
    id: 1,
    name: "Chicken Dum Biryani",
    category: "Biryani",
    description: "Aromatic rice with tender chicken",
    price: 189,
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Paneer Biryani",
    category: "Biryani",
    description: "Spiced paneer with basmati rice",
    price: 159,
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
  },
{
  id: 3,
  name: "Veg Biryani",
  category: "Biryani",
  description: "Delicious vegetable biryani",
  price: 139,
  rating: "4.5",
  image: "https://commons.wikimedia.org/wiki/Special:FilePath/Indian_Veg_Biryani.jpg?width=800"
},
  {
    id: 4,
    name: "Farmhouse Pizza",
    category: "Pizza",
    description: "Loaded with veggies and cheese",
    price: 229,
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Cheese Burst Pizza",
    category: "Pizza",
    description: "Extra cheese in every bite",
    price: 269,
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Classic Burger",
    category: "Burgers",
    description: "Crispy patty with fresh lettuce",
    price: 129,
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Cheese Burger",
    category: "Burgers",
    description: "Juicy burger with melted cheese",
    price: 159,
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Masala Dosa",
    category: "Dosa",
    description: "Crispy dosa with potato masala",
    price: 80,
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Plain Dosa",
    category: "Dosa",
    description: "Traditional crispy South Indian dosa",
    price: 60,
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Idli Sambar",
    category: "South Indian",
    description: "Soft idlis with hot sambar",
    price: 60,
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Veg Fried Rice",
    category: "Rice",
    description: "Fried rice with fresh vegetables",
    price: 120,
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Chicken Fried Rice",
    category: "Rice",
    description: "Tasty fried rice with chicken",
    price: 160,
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    name: "Veg Noodles",
    category: "Noodles",
    description: "Delicious noodles with vegetables",
    price: 110,
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    name: "Chocolate Brownie",
    category: "Desserts",
    description: "Rich chocolate dessert",
    price: 99,
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    name: "Ice Cream",
    category: "Desserts",
    description: "Creamy and delicious ice cream",
    price: 79,
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
  }
];

let category = "All";
let cart = [];

const grid = document.getElementById("food-grid");
const search = document.getElementById("search");

function showFoods() {
  let term = search.value.toLowerCase();

  let list = foods.filter(f =>
    (category === "All" || f.category === category) &&
    (f.name + " " + f.description).toLowerCase().includes(term)
  );

  grid.innerHTML = list.length
    ? list.map(f => `
      <article class="food-card">
        <div class="food-image">
          <img
            src="${f.image}"
            alt="${f.name}"
            loading="lazy"
            onerror="this.onerror=null;this.src='https://placehold.co/600x400/f5f8f2/208653?text=Food+Image'"
          >
        </div>

        <div class="food-info">
          <div class="food-top">
            <h3>${f.name}</h3>
            <span class="rating">★ ${f.rating}</span>
          </div>

          <p>${f.description}</p>

          <div class="food-bottom">
            <span class="price">₹${f.price}</span>
            <button class="add" data-add="${f.id}">+ Add</button>
          </div>
        </div>
      </article>
    `).join("")
    : "<p>No food items found.</p>";
}

function showCart() {
  let count = cart.reduce((s, x) => s + x.qty, 0);
  let total = cart.reduce((s, x) => s + x.price * x.qty, 0);

  document.getElementById("cart-count").textContent = count;
  document.getElementById("cart-total").textContent = "₹" + total;

  document.getElementById("cart-items").innerHTML = cart.length
    ? cart.map(x => `
      <div class="cart-line">
        <div>
          <b>${x.name}</b><br>
          <small>₹${x.price} each</small>
        </div>

        <div class="qty">
          <button data-change="${x.id}" data-n="-1">−</button>
          ${x.qty}
          <button data-change="${x.id}" data-n="1">+</button>
        </div>
      </div>
    `).join("")
    : "<p>Your cart is empty.</p>";
}

document.addEventListener("click", e => {
  if (e.target.dataset.add) {
    let f = foods.find(x => x.id === +e.target.dataset.add);
    let item = cart.find(x => x.id === f.id);

    item ? item.qty++ : cart.push({ ...f, qty: 1 });
    showCart();
  }

  if (e.target.dataset.change) {
    let item = cart.find(x => x.id === +e.target.dataset.change);
    if (!item) return;

    item.qty += +e.target.dataset.n;
    cart = cart.filter(x => x.qty > 0);
    showCart();
  }
});

document.getElementById("filters").addEventListener("click", e => {
  if (!e.target.dataset.category) return;

  category = e.target.dataset.category;

  document.querySelectorAll(".filter").forEach(b => {
    b.classList.toggle("active", b === e.target);
  });

  showFoods();
});

search.addEventListener("input", showFoods);

function openCart() {
  document.body.classList.add("cart-open");
}

function closeCart() {
  document.body.classList.remove("cart-open");
}

document.getElementById("cart-toggle").onclick = openCart;
document.getElementById("cart-close").onclick = closeCart;
document.getElementById("backdrop").onclick = closeCart;

document.getElementById("checkout").onclick = () => {
  if (!cart.length) {
    alert("Please add food to your cart first.");
    return;
  }

  alert("Demo order placed successfully! No real payment was processed.");

  cart = [];
  showCart();
  closeCart();
};

showFoods();
showCart();
