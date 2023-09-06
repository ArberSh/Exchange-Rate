const apiKey = "ab9053afd87f50ab499ce093"

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
        const option = document.createElement("option");
        option.value = element;
        option.text = element;
        fromDropdown.appendChild(option);
        
    });
}
function getOption(){
        const selectedCurrency = document.querySelector('#Currency').value;
        getRate(selectedCurrency)
        console.log(selectedCurrency)
    }
function getOptionTo() {
    const toDropdown = document.querySelector('#Currency1');
    toDropdown.innerHTML = '';
    AllCurrency.forEach((element) => {
        const option = document.createElement("option");
        option.value = element;
        option.text = element;
        toDropdown.appendChild(option);
        const selectedCurrency = document.querySelector('#Currency1').value;
        Results(selectedCurrency)
    });
}

function Results(Currency) {
    numb.value = numb.value * DataRate[Currency]
    Result.innerHTML = `<h1>${numb.value}</h1>`
    numb.value = ''
}