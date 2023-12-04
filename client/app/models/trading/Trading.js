class Trading{
  constructor({date, price, quantity}){
    this._date = new Date(date.getTime())
    this._price = price
    this._quantity = quantity

    Object.freeze(this)
  }

  get amount(){
    return this._price * this._quantity
  }

  get date(){
    return new Date(  ) 
  }

  get quantity(){
    return this._quantity
  }

  get price(){
    return this._price
  }
}