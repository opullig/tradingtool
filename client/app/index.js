let tbody = document.querySelector(" table tbody ")
let StocksForm = document.querySelector("#stocks button")
const fields = getFields()


focusField();

function focusField(){
  fields.data.focus();
}

function getFields(){
  let fields = {
    data : document.querySelector("#data"),
    quantity : document.querySelector("#quantity"),
    price : document.querySelector("#price")
  }
  return fields
}

function getAmount(stock){
  let td = document.createElement('td');
  td.textContent = stock.quantity.value * stock.price.value 
  return td
}

function clearField(){
  fields.data.value = "";
  fields.price.value = 0.0;
  fields.quantity.value = 1;
}

StocksForm.addEventListener('click',  event => {
  let tr = document.createElement('tr')
  
  for(let key in fields){
    let td = document.createElement('td')
    if(fields.hasOwnProperty(key)){
      td.textContent = fields[key].value
      tr.appendChild(td)
    }
  }
  tr.appendChild(getAmount(fields))

  tbody.appendChild(tr)

  clearField();
})
