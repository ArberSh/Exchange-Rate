console.log("works")
const apiKey = "11be19509942028a46e7605d"
const numb = document.querySelector(".PutNumber")
const Result = document.querySelector(".Result")
const test = document.querySelector(".test")
async function getRate(){
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${test.value}/`)
    const data = await response.json()
    console.log(data)
    const exchangerate = data.conversion_rates
    console.log(exchangerate.EUR)
    numb.value = numb.value * exchangerate.EUR
    Result.innerHTML = `<h1>${numb.value}</h1>`
    numb.value = ''
}

