console.log("works")
const apiKey = "11be19509942028a46e7605d"

const numb = document.querySelector(".PutNumber")
const Result = document.querySelector(".Result")
const test = document.querySelector(".test")

let DataRate = []
async function getRate(currency){
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}/`)
    const data = await response.json()
    console.log(data)
    DataRate = data.conversion_rates
    console.log(DataRate.EUR)
}
function getOption() {const fromDropdown = document.querySelector('#Currency');
    fromDropdown.innerHTML = ''; // Clear existing options

    for (const currency in DataRate) {
        const option = document.createElement('option');
        option.value = currency;
        option.text = currency;
        fromDropdown.appendChild(option);
    }
    const selectedCurrency = document.querySelector('#Currency').value;
    getRate(selectedCurrency)
    console.log(selectedCurrency);
}

function populateFromDropdown() {
    
}

function Results(){
    numb.value = numb.value * DataRate.EUR
    Result.innerHTML = `<h1>${numb.value}</h1>`
    numb.value = ''
    console.log("works")
}
console.log(DataRate.EUR)