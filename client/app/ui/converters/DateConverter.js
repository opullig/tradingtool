class DateConverter {
  constructor(){ throw new Error('This class cannot be instanciated')}

  static toText(date){
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  }

  static toDate(text){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(text))
      throw new Error('Must be in the format yyyy-mm-dd');
    
    return new Date(
      ...text
      .split('-')
      .map((item, index) => index === 1 ? item -1 : item)
    );
  }
}