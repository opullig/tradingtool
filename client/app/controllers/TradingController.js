class TradingController{

  constructor(){
    this._inputData = document.querySelector('#data');
    this._inputQuantity = document.querySelector('#quantity');
    this._inputPrice = document.querySelector('#price');
  }

  add(event){
    event.preventDefault();
    let data = new Date(
        ...this._inputData.value
        .split('-')
        .map((item, index) => index === 1 ? item -1 : item)
      );
    let trading = new Trading(
      data,
      parseInt(this._inputQuantity.value),
      parseFloat(this._inputPrice.value)
      )

    console.log(trading); 
  }
}