//U14123683
import { calcInterest } from "./interestRate.js";
import { calcLoan } from "./loanPayment.js";
import { calcInvestment } from "./investmentReturn.js";

// Interest 
document.getElementById("calculateInterest").addEventListener("click", function(){
    const interestPrincipal = parseFloat(document.getElementById("interestPrincipal").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const interestTime = parseFloat(document.getElementById("interestTime").value);
    const interest = calcInterest(interestPrincipal, interestRate, interestTime);
    if (isNaN(interestPrincipal) || isNaN(interestRate) || isNaN(interestTime)){
        alert('Please fill out all fields for the interest calculation.')
    } else {
        document.getElementById("totalInterest").innerText = `Total Loan Payment: $${interest.toFixed(2)}`
    }
})
// Loan
document.getElementById("calculateLoan").addEventListener("click", function(){
    const loanPrincipal = parseFloat(document.getElementById("loanPrincipal").value);
    const loanRate = parseFloat(document.getElementById("loanRate").value);
    const loanTime = parseFloat(document.getElementById("loanTime").value);
    const loan = calcLoan(loanPrincipal, loanRate, loanTime);
    if (isNaN(loanPrincipal) || isNaN(loanRate) || isNaN(loanTime)){
        alert('Please fill out all fields for the loan calculation.')
    } else {
        document.getElementById("totalLoan").innerText = `Monthly Loan Payment: $${loan.toFixed(2)}`
    }
})
// Investments
document.getElementById("calculateInvestment").addEventListener("click", function(){
    const investmentPrincipal = parseFloat(document.getElementById("investmentPrincipal").value);
    const investmentRate = parseFloat(document.getElementById("investmentRate").value);
    const investmentCompound = parseFloat(document.getElementById("investmentCompound").value);
    const investmentTime = parseFloat(document.getElementById("investmentTime").value);
    const investment = calcInvestment(investmentPrincipal, investmentRate, investmentCompound, investmentTime);
    if (isNaN(investmentPrincipal) || isNaN(investmentRate) || isNaN(investmentCompound) || isNaN(investmentTime)){
        alert('Please fill out all fields for the investment calculation.')
    } else {
        document.getElementById("totalInvestment").innerText = `Total Value of Investment: ${investment.toFixed(2)}`
    }
})