//U14123683
import { calcInterest } from "./interestRate.js";
import { calcLoan } from "./loanPayment.js";
import { calcInvestment } from "./investmentReturn.js";

document.getElementById("calculateInterest").addEventListener("click", function(){
    const interestPrincipal = parseFloat(document.getElementById("interestPrincipal").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const interestTime = parseFloat(document.getElementById("interestTime").value);
    const interest = calcInterest(interestPrincipal, interestRate, interestTime);
    document.getElementById("totalInterest").innerText = `Total Interest Charged: $${interest.toFixed(2)}`
})
document.getElementById("calculateLoan").addEventListener("click", function(){
    const loanPrincipal = parseFloat(document.getElementById("loanPrincipal").value);
    const loanRate = parseFloat(document.getElementById("loanRate").value);
    const loanTime = parseFloat(document.getElementById("loanTime").value);
    const loan = calcLoan(loanPrincipal, loanRate, loanTime);
    document.getElementById("totalLoan").innerText = `Monthly Loan Payment: $${loan.toFixed(2)}`
})
document.getElementById("calculateInvestment").addEventListener("click", function(){
    const investmentPrincipal = parseFloat(document.getElementById("investmentPrincipal").value);
    const investmentRate = parseFloat(document.getElementById("investmentRate").value);
    const investmentCompound = parseFloat(document.getElementById("investmentCompound").value);
    const investmentTime = parseFloat(document.getElementById("investmentTime").value);
    const investment = calcInvestment(investmentPrincipal, investmentRate, investmentCompound, investmentTime);
    document.getElementById("totalInvestment").innerText = `Total Value of Investment: ${investment.toFixed(2)}`
})