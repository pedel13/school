
let names = ["Pizza Margarita", "Pizza prosciutto", "pizza Salami"];
let prices = [19.90, 20.60, 21.40];
let counts = [0, 0, 0];
let results = [0, 0, 0];
let total = 0;
let deliverys = true;
let filetbasket = true;

function render() {
    calculator();
    filetbasket = true;
    let content = document.getElementById('filingBasket');
    content.innerHTML = ``;
    tampPlaid(content);
    delivery();
}

function tampPlaid(content){
    for (let j = 0; j < names.length; j++) {
        if (counts[j] > 0) {
            filetbasket = false;
            content.innerHTML += `<div class="menuBasket">
        <div class="crowd">
            <div class="plus" onclick="plus(${j})"></div>
            <p id="amounts${j}">${counts[j]}</p>
            <div class="minus" onclick="minus(${j})"></div>
        </div>
        <P>${names[j]}</P>
        <P>${results[j]}</P>
    </div>`;
        }
    }
}

function delivery(){
    let delivery = document.getElementById('delivery');
    if (deliverys) {
        delivery.innerHTML = `5.00`;
    }
    else {
        delivery.innerHTML = `0`;
    }

    document.getElementById('total').innerHTML = `${total}`
    addNone();
}

function count(){
    for (let i = 0; i < names.length; i++) {
        if (counts[i] > 0) {
            total = total + results[i];
        }
    }
}

function calculator() {
    total = 0;
    versand = true;
    count();
    if (total < 60) {
        total = total + 5;
    }
    else {
        versand = false;
    }
    total = Math.round(total * 100) / 100;
}

function add(i) {
    plus(i);
    removeNone();
    render();
}

function removeNone() {
    document.getElementById('baskets').classList.remove('none');
}

function addNone() {
    if (filetbasket) {
        document.getElementById('baskets').classList.add('none');
    }
}

function plus(i) {
    counts[i] = counts[i] + 1;
    results[i] = results[i] + prices[i];
    results[i] = Math.round(results[i] * 100) / 100;
    render();
}

function minus(i) {
    counts[i] = counts[i] - 1;
    results[i] = results[i] - prices[i];
    results[i] = Math.round(results[i] * 100) / 100;
    render();
}
