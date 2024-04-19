
document.getElementById("main-action-button").onclick = function(){
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}
const links = document.querySelectorAll(".menu-item > a");
for (let index = 0; index < links.length; index++) {
  links[index].onclick = function(){
        document.getElementById(links[index].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}
const buttons = document.querySelectorAll(".products-item .button");
for (let index = 0; index < buttons.length; index++) {
    buttons[index].onclick = function(){
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}
const prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function(e){
    const currentCurrency = e.target.innerText;
    let newCurrency = "$";
    let coefficient = 1;
    if(currentCurrency==="$")
    {
        newCurrency="₽";
        coefficient = 90;
    }
    else if (currentCurrency==="₽"){
        newCurrency="BYN";
        coefficient = 3;
    }
    else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;
    for (let index = 0; index < prices.length; index++) {
        prices[index].innerText = +(prices[index].getAttribute("data-base-price") * coefficient).toFixed(1) +" "+newCurrency;
    }
}

const product = document.getElementById("product");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function(){
    let hasError = false;
    [product,name,phone].forEach(element => {
        if (!element.value){
            element.style.borderColor ="red";
            hasError = true;
        } else{
            element.style.borderColor = "";
        }
    });

    if (!hasError){
        [product,name,phone].forEach(element => {
            element.value = "";
    });
    alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
}