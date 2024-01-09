class TradingController{

  constructor(){
    this._inputData = document.querySelector('#data');
    this._inputQuantity = document.querySelector('#quantity');
    this._inputPrice = document.querySelector('#price');
  }

  add(event){
    event.preventDefault();
    let trading = new Trading(
      DateConverter.toDate(this._inputData.value),
      parseInt(this._inputQuantity.value),
      parseFloat(this._inputPrice.value)
      )
    let dayMonthYear = DateConverter.toText(trading._date);

    console.log(dayMonthYear); 
  }
}