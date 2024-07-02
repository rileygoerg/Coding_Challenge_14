// A = P(1 + r/n)^(nt)
export function calcReturn(p, r, n, t){
    return p*(1+(r/n))^(n*t)
}