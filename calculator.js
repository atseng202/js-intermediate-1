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
  getFormValues();
}

/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  // you can decide on some initial values
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
