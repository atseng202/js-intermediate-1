'use strict';
// So we only have to do this once, find these elements in DOM
const calcForm = document.getElementById("calc-form");

/** 
 * Retrieves current form values and returns {amount, years, rate}. 
 * get the loan amount, loan years, and loan rate from the inputs with those ids

 * */

function getFormValues() {
  let form = document.getElementById('calc-form');
  let amount = parseFloat(document.getElementById('loan-amount').value);
  let termInYears = parseFloat(document.getElementById('loan-years').value);
  let annualRate = parseFloat(document.getElementById('loan-rate').value);
  annualRate = annualRate / 100;
  // console.log(annualRate)
  // console.log(termInYears)
  // console.log(amount)
  return { amount, termInYears, annualRate };
}

/** Calculate monthly payment and return. */


/* 
  args: amount is the principle, n is the years * 12, i is the yearly rate / 12
  P = amount
  n = years * 12
  i = rate / 12

  returns: the monthly payment (float)
 */
function calcMonthlyPayment(amount, years, rate) {
  let i = rate / 12;
  let n = years * 12;
  let numerator = parseFloat(amount * i);
  let denom = 1 - parseFloat(((1 + i) ** -n));

  return parseFloat((numerator / denom).toFixed(2));
}

/** Get form values, calculate & update display. */

function getFormValuesAndDisplayResults() {
  // part 1: getting our form values (we did all the work above)
  let formValues = getFormValues();
  let { amount, termInYears, annualRate } = formValues;
  const monthlyPayment = calcMonthlyPayment(amount, termInYears, annualRate);
  if (isNaN(monthlyPayment)) {
    document.getElementById("calc-monthly-payment").innerText = "Fill the out the whole form!";
    return;
  }

  // part 2: putting the payment on screen
  document.getElementById("calc-monthly-payment").innerText = "$" + monthlyPayment;

}

/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  // you can decide on some initial values
  // pull the html elements and set their initial values to some number like 10000, 5,5
}

/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  // so we can test the calcMonthlyPayment independently of all the
  // HTML, only do the rest if this is run on a page with the form
  if (!calcForm) return;

  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}

window.addEventListener('DOMContentLoaded', start);
