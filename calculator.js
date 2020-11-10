// So we only have to do this once, find these elements in DOM
const calcForm = document.getElementById("calc-form");

/** 
 * Retrieves current form values and returns {amount, years, rate}. 
 * get the loan amount, loan years, and loan rate from the inputs with those ids

 * */

function getFormValues() {
  let formData = new FormData(document.getElementById("calc-form"));
  return formData;
  
  
  // const amount = document.getElementById("loan-amount").innerText;
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
