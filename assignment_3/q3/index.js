let home=document.querySelector(".home");
let cart=document.querySelector("cart");


// cards container
const cardsContainer = document.querySelector(".cards_container");

let products = [
  {
    id: 1,
    title: "Cozy Cotton Shirt",
    desc: "Ultra-soft breathable cotton shirt for everyday comfort.",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    category: "Clothing",
    price: 799,
    discount: 10,
    rating: 4.3,
    stock: 25,
    brand: "UrbanWear",
    tags: ["Cotton", "Casual", "Summer"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Black"],
    isFeatured: true,
    createdAt: "2026-03-01",
    inCart:false
  },
  {
    id: 2,
    title: "Classic Denim Jacket",
    desc: "Stylish denim jacket with a rugged yet comfortable fit.",
    img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80",
    category: "Outerwear",
    price: 1999,
    discount: 15,
    rating: 4.6,
    stock: 12,
    brand: "DenimCo",
    tags: ["Denim", "Winter", "Trendy"],
    sizes: ["M", "L", "XL"],
    colors: ["Blue", "Dark Blue"],
    isFeatured: true,
    createdAt: "2026-02-20",
    inCart:false
  },
  {
    id: 3,
    title: "Lightweight Summer Hoodie",
    desc: "Perfect hoodie for breezy summer evenings.",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    category: "Hoodies",
    price: 1199,
    discount: 5,
    rating: 4.1,
    stock: 30,
    brand: "CoolFit",
    tags: ["Hoodie", "Summer", "Lightweight"],
    sizes: ["S", "M", "L"],
    colors: ["Grey", "Green"],
    isFeatured: false,
    createdAt: "2026-03-10",
    inCart:false
  },
  {
    id: 4,
    title: "Slim Fit Black T-Shirt",
    desc: "Minimalist slim-fit t-shirt for a modern look.",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    category: "T-Shirts",
    price: 499,
    discount: 0,
    rating: 4.0,
    stock: 50,
    brand: "BasicWear",
    tags: ["Casual", "Essential"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    isFeatured: false,
    createdAt: "2026-01-15",
    inCart:false
  },
  {
    id: 5,
    title: "Premium Leather Jacket",
    desc: "High-quality leather jacket for a bold statement.",
    img: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Outerwear",
    price: 4999,
    discount: 20,
    rating: 4.8,
    stock: 8,
    brand: "LuxStyle",
    tags: ["Leather", "Winter", "Premium"],
    sizes: ["M", "L"],
    colors: ["Black", "Brown"],
    isFeatured: true,
    createdAt: "2026-02-05",
    inCart:false
  }
];
let cartProducts=[];

function createHome(productList){
  cardsContainer.innerHTML='';
  productList.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  const finalPrice = Math.round(item.price - (item.price * item.discount / 100));

  card.innerHTML = `
    <img src="${item.img}" alt="${item.title}">

    <div class="card_contains">
      <h2>${item.title}</h2>
      <p>${item.desc}</p>

      <div class="price">
        <span class="final">₹${finalPrice}</span>
        ${
          item.discount > 0
            ? `<span class="original">₹${item.price}</span>
               <span class="discount">-${item.discount}%</span>`
            : ""
        }
      </div>

      <div class="rating">
        ⭐ ${item.rating}
      </div>

      <div class="tags">
        ${item.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>

      <div class="extra">
        <p><strong>Brand:</strong> ${item.brand}</p>
        <p><strong>Stock:</strong> ${item.stock > 0 ? "In Stock" : "Out of Stock"}</p>
      </div>

      <button ${item.inCart  ? "disabled" : ""} class="button addToCart" data-id=${item.id}>
        ${item.inCart  ? "Thanks" : "Add to Cart"}
      </button>
    </div>
  `;

  cardsContainer.appendChild(card);
});
}
createHome(products);
cardsContainer.addEventListener('click',(e)=>{
  if (e.target.classList.contains("addToCart")) {
    const id = e.target.dataset.id;

    const product = products.find(p => p.id == id);

    products=products.filter(e=>e.id!=product.id);
    product.inCart=true;

    cartProducts=[...cartProducts,product];
    createHome(products);
  }
});

document.querySelector('.cart').addEventListener('click',()=>{
  createHome(cartProducts);
})
document.querySelector('.home').addEventListener('click',()=>{
  createHome(products);
})
