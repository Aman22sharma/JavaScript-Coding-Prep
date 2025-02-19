let data = [];
let cardContaniner = document.getElementById('card-container');

document.addEventListener("DOMContentLoaded", function(event){
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    fetch(url).then((res) => res.json())
    .then((res)=>{
        data = res;
        createCards(res);
    })
    .catch((err)=> console.log(err))

    
})

function createCards(data){
    for (let i = 0; i < data.length; i++) {
        cardContaniner.innerHTML +=
            `<div class="card">
            <div class="image">
                <img src=${data[i].image} class="img" />
            </div>
            <div class="details">
                <div class="row">
                    <sapn class="name">${data[i].name}</sapn>
                    <sapn class="price">${data[i].current_price}</sapn>
                </div>
                <div class="row">
                    <sapn class="shortname">${data[i].symbol}</sapn>
                    <sapn class='percentage ${checkNumber(data[i].market_cap_change_percentage_24h)}'>${data[i].market_cap_change_percentage_24h}</sapn>
                </div>
            </div>
        </div>`
    }
}

function checkNumber(value){
    let color = value > 0 ? 'percentage_positive' : 'percentage_negative';
    return color;
}