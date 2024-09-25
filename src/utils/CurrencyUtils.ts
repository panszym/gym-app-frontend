class CurrencyUtils{
    static formatToPLN(amount: number){
        return new Intl.NumberFormat('pl-PL' , {
            style: "currency",
            currency: "PLN"
        }).format(amount);
    }
}

export default CurrencyUtils;