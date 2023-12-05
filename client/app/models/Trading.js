class Trading{
  constructor(_date, _price, _quantity){
    Object.assign(this, { _quantity, _price })
    this._date = new Date(_date.getTime());
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