let home=document.querySelector(".home");
let cart=document.querySelector("cart");


// cards container
const cardsContainer = document.querySelector(".cards_container");

const products = [
  {
    title: "Cozy Shirt",
    desc: "Soft cotton, perfect for daily wear",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    tags: ["Cotton", "Casual"]
  },
  {
    title: "Denim Jacket",
    desc: "Classic style with modern comfort",
    img: "https://images.unsplash.com/photo-1585386959984-a4155221f198",
    tags: ["Denim", "Winter"]
  },
  {
    title: "Summer Hoodie",
    desc: "Lightweight and breathable",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    tags: ["Hoodie", "Summer"]
  }
];

products.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${item.img}" alt="${item.title}">
    <div class="card_contains">
      <h1>${item.title}</h1>
      <p>${item.desc}</p>
      <div class="tags">
        ${item.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
    </div>
  `;

  cardsContainer.appendChild(card);
});

cardsContainer.addEventListener();