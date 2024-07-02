// M = P[r(1+r)^n]/[(1+r)^n-1]
export function calcLoan(p, r, n){
    const rate = r/1200
    return p * ((rate*(1+rate)^n)/((1+rate)^(n-1)))
}