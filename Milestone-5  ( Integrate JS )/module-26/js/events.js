console.log('Dom domadum')
// Option -2
function makeRed(){
    document.body.style.background = 'red'
}
// Option -3
const makeBlue = document.getElementById('makeBlue')
makeBlue.onclick = makeMeBlue;

function makeMeBlue(){
    document.body.style.background = 'blue'
}
// Option -3 (Another)
const makePurple = document.getElementById('makePurple')
makePurple.onclick = function makeMePurple(){
    document.body.style.background = 'purple'
}

// Option-4
