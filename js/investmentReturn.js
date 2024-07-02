// A = P(1 + r/n)^(nt)
// investmentCompound is # of times the investment compounds in a time period (year)
// investmentTime is in years
export function calcInvestment(investmentPrincipal, investmentRate, investmentCompound, investmentTime){
    return investmentPrincipal * (1+(investmentRate)/investmentCompound)^investmentCompound*investmentTime
}