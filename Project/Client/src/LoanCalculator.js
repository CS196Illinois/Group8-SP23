import React, { useState } from 'react';
import './calc.css';

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function calculateMonthlyPayment() {
    if (!loanAmount || !interestRate || !loanTerm) {
      alert('Please fill in all the required fields.');
      return;
    }

    const ratePerMonth = (interestRate / 100) / 12;
    const termInMonths = loanTerm * 12;
    const numerator = ratePerMonth * Math.pow(1 + ratePerMonth, termInMonths);
    const denominator = Math.pow(1 + ratePerMonth, termInMonths) - 1;
    const payment = loanAmount * (numerator / denominator);

    setMonthlyPayment(payment.toFixed(2));
  }

  return(
    <div>

      <div className="LoanCalculator">
        <h1>Loan Calculator</h1>
        <div>
          <label htmlFor="loanAmount" >Loan Amount:</label>
          <input
            type="number"
            id="loanAmount"
            placeholder="Amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="interestRate">Interest Rate (%):</label>
          <input
            type="number"
            id="interestRate"
            placeholder="Rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="loanTerm">Loan Term (Years):</label>
          <input
            type="number"
            id="loanTerm"
            placeholder="Years"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>

        <div>
          <button onClick={calculateMonthlyPayment}>Calculate</button>
        </div>
        
        <h3>
          Monthly Payment: <span>{monthlyPayment}</span>
        </h3>
      </div>
    </div>
  );
  
}

export default LoanCalculator;