const inputValue=document.querySelector('.inputBox');
const productList=document.querySelector('.productList');
let f=1;
let intervalId;
function startCoundown(){
     f=0;
        intervalId=setInterval(()=>{
            f=1;
        },3000);
}

const products=[
    "pen",
    'pencile',
    'rubber',
    'nail cutter',
    'mobile cover',
    'sharpner',
    'book stickers',
    'taddy bear',
    'hear pin',
    'safety pin',
    'toffy',
    'biscut',
    'knife',
    'pass pass',
    'eno'
];
function updateProducts(filteredProducts){
    productList.innerHTML=''
    filteredProducts.forEach(element => {
        const newProdectNode=document.createElement('div');
        newProdectNode.classList.add("product");
        newProdectNode.innerText=element
        productList.appendChild(newProdectNode);
    });
}
updateProducts(products);

inputValue.addEventListener('keyup',()=>{
    const searchedValue=inputValue.value;
    console.log(searchedValue)
    if(f){
        const newProductList=products.filter((e)=>e.includes(searchedValue));
        updateProducts(newProductList);
        startCoundown();
    }
});


clearInterval(intervalId);