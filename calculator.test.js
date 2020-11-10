it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calcMonthlyPayment(10000, 5, 0.05)).toEqual(188.71);
});

it('returns NaN if there is missing information', function () {
  expect(calcMonthlyPayment(10000, 5)).toEqual(NaN);
});

