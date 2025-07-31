class CurrencyUtils{
    static getFormatedCurrency(amount:number){
      return new Intl.NumberFormat('en-IN',{
            style :'currency',
            currency:'INR'
        }).format(amount);
    }
}
export default CurrencyUtils;