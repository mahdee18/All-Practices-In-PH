function duplicateName(names) {
    let unique = []
    for (let i = 0; i < names.length; i++) {
        let name = names[i]
        console.log(name)
        if (unique.includes(name) === false) {
            unique.push(name)
        }
    }
    return unique
}

let name = ['Abul', 'babul', 'cabul', 'dabul', 'Abul', 'babul', 'cabul', 'dabul', 'babul', 'cabul', 'dabul']
let duplicateNames = duplicateName(name)
console.log(duplicateNames)