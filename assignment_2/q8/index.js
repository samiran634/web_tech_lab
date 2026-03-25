const mainContainer=document.querySelector(".carouselList");

const quotes = [
    {
        name: "Albert Einstein",
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
    },
    {
        name: "Mahatma Gandhi",
        quote: "Be the change that you wish to see in the world.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg"
    },
    {
        name: "Nelson Mandela",
        quote: "It always seems impossible until it’s done.",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Nelson_Mandela_1994.jpg"
    },
    {
        name: "Steve Jobs",
        quote: "The only way to do great work is to love what you do.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Steve_Jobs_Headshot_2010-CROP.jpg"
    },
    {
        name: "Confucius",
        quote: "It does not matter how slowly you go as long as you do not stop.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Confucius_the_scholar.jpg"
    },
    {
        name: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG"
    },
    {
        name: "Eleanor Roosevelt",
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Eleanor_Roosevelt_portrait_1933.jpg"
    },
    {
        name: "Oscar Wilde",
        quote: "Be yourself; everyone else is already taken.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Oscar_Wilde_portrait.jpg"
    }
];

for(let quate of quotes){
    const productNode=document.createElement("div");
    productNode.classList.add("card");
    productNode.classList.add("carouselItem");
    productNode.innerHTML=`
    <div >
        <p>${quate.quote}</p>
    </div>
    `
    mainContainer.appendChild(productNode);
}