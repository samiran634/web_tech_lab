const cards = document.querySelector(".cards");

async function fetchData() {
    const response = await fetch('./data.json');
    const jsonData = await response.json();
    return jsonData;
}

async function renderCards() {
    const data = await fetchData();

    for (let d of data) {
        const card = document.createElement("div");
        card.classList.add("card");

        card.style.backgroundImage = `url(${d.image})`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
        card.style.backgroundRepeat = "no-repeat";

        card.innerHTML = `
            <div class="card-content">
                <h3>${d.name}</h3>
                <p>${d.tag}</p>
                <p>₹${d.price}</p>
            </div>
        `;

        cards.appendChild(card);
    }
}

renderCards();