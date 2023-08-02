let fibb = [0, 1]
for (let i = 2; i <= 15; i++) {
    fibb[i] = fibb[i - 1] + fibb[i - 2]

}
console.log(fibb)