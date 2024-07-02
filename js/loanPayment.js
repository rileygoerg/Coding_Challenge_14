// M = P[r(1+r)^n]/[(1+r)^n-1]
// loanTime is in months
export function calcLoan(loanPrincipal, loanRate, loanTime){
    const rate = loanRate/100
    return (loanPrincipal * (rate*((1+rate)^loanTime)))/(((1+rate)^loanTime)-1)
}

