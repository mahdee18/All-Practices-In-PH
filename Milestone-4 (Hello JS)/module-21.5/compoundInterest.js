function compoundInterest(principal, rate, time) {
  var interest = principal * (1 + (rate / 100)) ** time;
  console.log(interest.toFixed(2))
}
compoundInterest(20000, 0.10, 3)
