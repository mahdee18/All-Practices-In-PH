function getMyResult(score) {
   if (score >= 80) {
      return 'A+'
   }
   else if (score >= 70) {
      return 'A'
   }
   else if (score >= 60) {
      return 'A-'
   }
   else if (score >= 60) {
      return 'B'
   }
   else if (score >= 50) {
      return 'C'
   }
   else {
      return 'Tumi fail,Tomar kopale biya nai!'
   }
}
let marks = 90;
let grade = getMyResult(marks)
console.log(grade)