// M = P[r(1+r)^n]/[(1+r)^n-1]
// loanTime is in months
export function calcLoan(loanPrincipal, loanRate, loanTime){
    return (loanPrincipal * (((loanRate/1200)*(1+(loanRate/1200))^loanTime)/(((1+(loanRate/1200))^loanTime)-1)))/loanTime
}
