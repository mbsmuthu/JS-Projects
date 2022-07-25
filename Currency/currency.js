const baseCurrency = document.querySelector("#base-currency");
const targetCurrency = document.querySelector("#target-currency");
const result = document.querySelector("#result");


const getConversionRate = () =>{
    return fetch(`https://v6.exchangerate-api.com/v6/2b9796362ed2e9bfc73d944b/latest/${baseCurrency.value}`)
            .then(response=>response.json())
            .then(data=>{
                result.textContent=data.conversion_rates[targetCurrency.value];
                })
            }
                

baseCurrency.addEventListener("change", ()=>{
    getConversionRate();
})

targetCurrency.addEventListener("change", ()=>{
    getConversionRate();
})