let dropdown = document.querySelectorAll("select");
let baseLink=`https://open.er-api.com/v6/latest/USD`
let res ={}
document.addEventListener('DOMContentLoaded',async ()=>{
    let re= await fetch(baseLink)
    re =await re.json()
    res=re.rates
})
const conversion = () => {
    let fromCurrency = document.getElementById('fCountry').value;
    let toCurrency = document.getElementById('toCountry').value;
    let amount = parseFloat(document.querySelector('input').value);
  
    if (!fromCurrency || !toCurrency || isNaN(amount)) {
      document.getElementById('res').innerText = 'Please enter a valid amount and select currencies.';
      return;
    }
  
    let fromRate = res[fromCurrency];
    let toRate = res[toCurrency];
  
    if (!fromRate || !toRate) {
      document.getElementById('res').innerText = 'Invalid currencies selected.';
      return;
    }
  
    let convertedAmount = (amount / fromRate) * toRate;
  
    document.getElementById('res').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  }
  
console.log('hi'+res);
const handle= async(event)=>{
    const tar = event.target
    const country = countryList[event.target.value] 
    const link = `https://flagsapi.com/${country}/shiny/64.png`
    if(tar.name =="fCurrency"){
        const l = document.getElementById('h')
        l.innerText=`From : ${country}`
        const img = document.getElementById('f')
        img.src=link
    }
    else  if(tar.name =="toCurrency"){
        const img = document.getElementById('t')
        img.src=link
         const l = document.getElementById('g')
        l.innerText=`From : ${country}`
    }
  }

  
for ( const select of dropdown) {
  console.log(select);
  for ( con in countryList) {
    let option = document.createElement("option");
    option.value = con;
    option.innerText = con;
    select.appendChild(option);
    if(select.id =="fCountry" && 
        con ==="USD")
        option.selected="selected"
    else  if(select.id =="toCountry" && con ==="INR")
       option.selected ="selected"
  }
  select.addEventListener('change',handle);
}



