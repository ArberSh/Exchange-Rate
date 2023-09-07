const apiKey = "9f1824e87655217245642df4"

const numb = document.querySelector(".PutNumber")
const Result = document.querySelector(".Result")
const test = document.querySelector(".test")

let DataRate = []
let AllCurrency = []

async function getRate(currency) {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`)
    const data = await response.json()
    DataRate = data.conversion_rates
}

async function getAllCurrency() {
    const response = await fetch(`currency-codes.json`)
    const data = await response.json()
    AllCurrency = data[0].currencies;
    getOptionFrom();
    getOptionTo()
}
getAllCurrency();

function getOptionFrom() {
    const fromDropdown = document.querySelector('#Currency');
    fromDropdown.innerHTML = '';
    AllCurrency.forEach((element) => {
        option = document.createElement("option");
        option.value = element;
        option.text = element;
        fromDropdown.appendChild(option);
    });
}
function getOptionF(){
        const selectedCurrency = document.querySelector('#Currency').value;
        getRate(selectedCurrency)
    }
function getOptionTo() {
    const toDropdown = document.querySelector('#Currency1');
    toDropdown.innerHTML = '';
    AllCurrency.forEach((element) => {
        const option = document.createElement("option");
        option.value = element;
        option.text = element;
        toDropdown.appendChild(option);
    });
}
function Results() {
    const selectedCurrency = document.querySelector('#Currency1').value;
    const inputnumber = parseFloat(numb.value)
    if(isNaN(inputnumber)) {
        Result.innerHTML = `<h2> Please enter a valid number. </h2>`
        Result.style.display = 'block'
    }
    else{
    const result = inputnumber * DataRate[selectedCurrency]
    Result.innerHTML = `<h1>${result.toFixed(4) + " " + selectedCurrency}</h1>`
    Result.style.display = 'block'
}
}