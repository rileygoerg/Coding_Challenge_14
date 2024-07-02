// Interest = Principal * Rate * Time
// interestTime is in years
export function calcInterest(interestPrincipal, interestRate, interestTime){
    return interestPrincipal * (interestRate/100) * interestTime
}